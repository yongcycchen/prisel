import { Room, newRoom, RoomConfig, RoomId } from './room';
import { Context } from './objects';
import {
    Packet,
    Request,
    ResponseWrapper,
    wrapResponse,
    PacketType,
    Response,
    Code,
} from '@prisel/common';
import WebSocket from 'ws';
import { emit } from './utils/networkUtils';
import { getSuccessFor, getFailureFor } from './message';
import debug from './debug';

export type PlayerId = string;

const DEFAULT_REQUEST_TIMEOUT = 1000;

export abstract class Player {
    public abstract getName(): string;
    public abstract getId(): PlayerId;
    public abstract getRoom(): Room | null;
    public abstract findRoomById(roomId: RoomId): Room | null;
    public abstract createRoom(config: Omit<RoomConfig, 'id'>): Room;
    public abstract joinRoom(roomId: RoomId): Room | null;
    public abstract leaveRoom(): void;
    public abstract emit<T extends Packet<any>>(packet: T): void;
    /**
     * Send a request to client
     * @param request partial Request. no need to specify requst_id as it will
     * be auto populated
     * @param timeout timeout in ms. 0 for no timeout
     */
    public abstract request<Payload = any>(
        request: Omit<Request<Payload>, 'request_id'>,
        timeout?: number,
    ): Promise<ResponseWrapper>;
    public abstract respond<Payload = never>(request: Request<any>, payload?: Payload): void;
    public abstract respondFailure(request: Request<any>, message?: string, detail?: any): void;
    public abstract getSocket(): WebSocket;
    public equals(player: Player): boolean {
        if (!player) {
            return false;
        }
        return this.getId() === player.getId();
    }
}

export interface PlayerConfig {
    name: string;
    id: string;
}
/* tslint:disable: max-classes-per-file*/
class PlayerImpl extends Player {
    private room: Room = null;
    private context: Context;
    private id: string;
    private name: string;
    constructor(context: Context, config: PlayerConfig) {
        super();
        this.context = context;
        this.id = config.id;
        this.name = config.name;
    }
    public getSocket(): WebSocket {
        return this.context.SocketManager.getSocket(this.id);
    }

    public getName() {
        return this.name;
    }

    public getId() {
        return this.id;
    }
    public newRequestId() {
        return this.context.newRequestId();
    }
    public getRoom() {
        return this.room;
    }
    public createRoom(config: Omit<RoomConfig, 'id'>) {
        return newRoom(this.context, config);
    }

    public findRoomById(roomId: RoomId) {
        return this.context.rooms.get(roomId) || null;
    }

    public joinRoom(roomId: RoomId) {
        const targetRoom = this.findRoomById(roomId);
        if (targetRoom) {
            this.room = targetRoom;
            targetRoom.addPlayer(this);
        }
        return this.room;
    }

    public leaveRoom() {
        if (this.room) {
            this.room.removePlayer(this);
            this.room = null;
        }
    }

    public emit<T extends Packet<any>>(packet: T) {
        setImmediate(emit, this.getSocket(), packet);
    }

    public request<Payload = any>(
        request: Omit<Request<Payload>, 'request_id'>,
        timeout = DEFAULT_REQUEST_TIMEOUT,
    ) {
        const fullRequest: Request<Payload> = {
            ...request,
            request_id: this.newRequestId(),
        };
        this.emit(fullRequest);
        return this.context.requests.addRequest(fullRequest, timeout).catch((_) => {
            debug('request timeout');
            const responseForTimeout: Response = {
                type: PacketType.RESPONSE,
                request_id: fullRequest.request_id,
                status: {
                    code: Code.FAILED,
                    message: 'timeout',
                },
                payload: {},
            };
            if (fullRequest.system_action !== undefined) {
                responseForTimeout.system_action = fullRequest.system_action;
            }
            if (fullRequest.action !== undefined) {
                responseForTimeout.action = fullRequest.action;
            }
            return wrapResponse(responseForTimeout);
        });
    }

    public respond<Payload = never>(request: Request<any>, payload?: Payload) {
        this.emit(getSuccessFor(request, payload));
    }

    public respondFailure(request: Request<any>, message?: string, detail?: any) {
        this.emit(getFailureFor(request, message, detail));
    }
}

export function newPlayer(context: Context, config: PlayerConfig): Player {
    if (context.players.has(config.id)) {
        return context.players.get(config.id);
    }
    const player = new PlayerImpl(context, config);
    context.players.set(config.id, player);
    return player;
}
