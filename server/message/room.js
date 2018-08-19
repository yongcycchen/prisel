// @flow
import type { MessageT } from '../objects';
/**
 * functions to create messages.
 * Each function should return an array.
 * The first parameter of the array is the type of the message,
 * the rest are the content
 */

module.exports = {
    getPong(): MessageT {
        return ['PONG', {}];
    },
    /**
     * Success response for client login
     * @param {String} userId
     */
    getLoginAccept(userId: string): MessageT {
        return ['LOGIN_ACCEPT', { userId }];
    },
    /**
     * Success response for client joining room
     */
    getJoinAccept(): MessageT {
        return ['JOIN_ACCEPT', {}];
    },
    /**
     * Error response for client joinomg room
     * @param {String} errorType
     */
    getJoinError(errorType: string): MessageT {
        return ['JOIN_ERROR', { errorType }];
    },
    /**
     * Success response for client leaving room
     */
    getLeaveAccept(): MessageT {
        return ['LEAVE_ACCEPT', {}];
    },
    /**
     * Host successfully kick a user out of the room
     */
    getKickAccept(): MessageT {
        return ['KICK_ACCEPT', {}];
    },
    /**
     * Cannot kick user out of the room
     * @param {*} errorType
     */
    getKickError(errorType: string): MessageT {
        return ['KICK_ERROR', { errorType }];
    },
    /**
     * Success response for client ready
     */
    getReadyAccept(): MessageT {
        return ['READY_ACCEPT', {}];
    },
    /**
     * Host start the game
     */
    getGameStart(): MessageT {
        return ['GAME_START', {}];
    },
    /**
     * Success response for client creating room
     * @param {String} roomId
     */
    getCreateRoomAccept(roomId: string): MessageT {
        return ['CREATE_ROOM_ACCEPT', { roomId }];
    },
    /**
     * Error response for client creating room
     * @param {String} errorType
     */
    getCreateRoomError(errorType: string): MessageT {
        return ['CREATE_ROOM_ERROR', { errorType }];
    },

    getRoomUpdate(roomData: Object): MessageT {
        return ['ROOM_UPDATE', roomData];
    },
};
