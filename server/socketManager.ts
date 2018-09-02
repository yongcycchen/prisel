import { Socket } from './objects';

import debug from './debug';

/**
 * Singleton class to manage sockets and their ids.
 */
class SocketManager {
    private socketMap: WeakMap<Socket, string>;
    private idMap: Map<string, Socket>;

    constructor() {
        this.socketMap = new WeakMap();
        this.idMap = new Map();
    }

    public add(id: string, socket: Socket) {
        const existingId = this.socketMap.get(socket);
        const existingSocket = this.idMap.get(id);
        if (existingId === id && existingSocket === socket) {
            // socket is already added, abort
            return;
        }
        if (existingId) {
            throw new Error(
                `SocketMap inconsistency found. adding Id ${id} but found ${existingId}`,
            );
        }
        if (existingSocket) {
            throw new Error(
                `SocketMap inconsistency found. adding Id to ${id} but found another socket at this id`,
            );
        }
        this.socketMap.set(socket, id);
        this.idMap.set(id, socket);
    }

    public getId(socket: Socket): string {
        const id = this.socketMap.get(socket);
        if (id === undefined) {
            throw new Error('got undefined socket id');
        }
        return id;
    }

    public getSocket(id: string): Socket {
        const socket = this.idMap.get(id);
        if (socket === undefined) {
            throw new Error(`got undefined socket for id ${id}`);
        }
        return socket;
    }

    public hasId(id: string) {
        return this.idMap.has(id);
    }

    public hasSocket(socket: Socket) {
        return this.socketMap.has(socket);
    }

    public removeById(id: string) {
        const socket: Socket | void = this.idMap.get(id);
        this.idMap.delete(id);
        if (socket !== undefined) {
            this.socketMap.delete(socket);
        }
    }

    public removeBySocket(socket: Socket) {
        const id: string | void = this.socketMap.get(socket);
        if (id !== undefined) {
            this.idMap.delete(id);
        }
        this.socketMap.delete(socket);
    }
}

export default SocketManager;
