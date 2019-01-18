import Client from '../client';
import { getCreateRoom, getJoin } from '../message/room';
import { getChat } from '../message/chat';
import { getGameStart, getMessage } from '../message';
export enum Fields {
    TEXT,
    NUMBER,
    CUSTOM,
}

export interface FieldType {
    label: string;
    key: string;
    type: Fields;
    default?: any;
    render?: any;
}

interface ResolvedFields {
    [fieldName: string]: any;
}

export interface ActionType {
    title: string;
    fields?: FieldType[];
    handler: (client: Client, fields?: ResolvedFields) => Promise<any> | any;
}

export interface Profile {
    actions: ActionType[];
}

const defaultProfile: Profile = {
    actions: [
        {
            title: 'create room',
            fields: [
                { label: 'room name', key: 'roomName', type: Fields.TEXT, default: 'room-1' },
                {
                    label: 'game',
                    key: 'game',
                    type: Fields.TEXT,
                    default: 'big2',
                },
            ],
            handler: (client: Client, fields: any) => {
                client.emit(...getCreateRoom(fields.roomName, fields.game));
            },
        },
        {
            title: 'join',
            fields: [{ label: 'room id', key: 'roomid', type: Fields.TEXT, default: 'ROOM-1' }],
            handler: (client: Client, fields: any) => {
                client.emit(...getJoin(fields.roomid));
            },
        },
        {
            title: 'chat',
            fields: [{ label: 'message', key: 'msg', type: Fields.TEXT }],
            handler: (client: Client, fields: any) => {
                client.emit(...getChat(fields.msg));
            },
        },
        {
            title: 'gameStart',
            fields: [],
            handler: (client: Client, fields: any) => {
                client.emit(...getGameStart());
            },
        },
        {
            title: 'move(indies seperated by space)',
            fields: [{ label: 'position', key: 'index', type: Fields.TEXT }],
            handler: (client: Client, fields: any) => {
                client.emit(...getMessage({ cards: parseToArray(fields.index) }));
            },
        },
    ],
};

function parseToArray(data: string) {
    if (data === '') {
        return [];
    }
    const array = data.split(' ');
    return array.map(Number);
}
export default defaultProfile;
