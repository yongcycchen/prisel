import Client from '../client';
import { getCreateRoom, getJoin } from '../message/room';
import { getChat } from '../message/chat';
import { getGameStart, getMove } from '../message';
import TicTacToe from './tic-tac-toe';
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
            fields: [{ label: 'room name', key: 'roomName', type: Fields.TEXT, default: 'room-1' }],
            handler: (client: Client, fields: any) => {
                client.emit(...getCreateRoom(fields.roomName));
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
            title: 'send',
            fields: [
                { label: '', key: 'msg', type: Fields.TEXT },
                { label: 'user id', key: 'uid', type: Fields.TEXT },
                { label: 'room id', key: 'rid', type: Fields.TEXT },
            ],
            handler: (client: Client, fields: any) => {
                client.emit(...getChat(fields.uid, fields.msg, fields.rid));
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
            title: 'tic tac toe',
            fields: [
                {
                    label: 'tic',
                    key: 'index',
                    type: Fields.CUSTOM,
                    render: TicTacToe,
                },
            ],
            handler: (client: Client, fields: any) => {
                client.emit(...getMove({ index: Number(fields.index) }));
            },
        },
    ],
};

export default defaultProfile;
