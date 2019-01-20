import { Context, Socket } from '../objects';
import { getRoom, getClient } from '../utils/stateUtils';

/**
 * Handles client disconnection when client disconnects unexpectedly
 * @param context
 * @param socket
 */
export const handleDisconnect = (context: Context, socket: Socket) => (data: {}) => {
    const { SocketManager, updateState } = context;
    if (!SocketManager.hasSocket(socket)) {
        // client is not login yet, nothing to do
        return;
    }
    const room = getRoom(context, socket);
    const client = getClient(context, socket);
    if (room && client) {
        const handle = context.handles[room.id];
        handle.room.onLeave(handle, client.id, data);
    }
    const clientId = SocketManager.getId(socket);
    SocketManager.removeBySocket(socket);
    updateState((draft) => {
        delete draft.connections[clientId];
    });
};
