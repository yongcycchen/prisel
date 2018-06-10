const autoScriptUtils = require('../autoScriptUtils');

describe('autoScriptUtils', () => {
    describe('wait', () => {
        it('should have action', () => {
            expect(autoScriptUtils.wait('EVENT_TYPE').action).toBe(autoScriptUtils.ACTION.WAIT);
        });
        it('should have all event type and callback function', () => {
            const event = 'EVENT_TYPE';
            const mockCallback = () => {};
            expect(autoScriptUtils.wait(event, mockCallback)).toMatchObject({
                type: event,
                callback: mockCallback,
            });
        });
    });

    describe('emit', () => {
        it('should have action', () => {
            expect(autoScriptUtils.emit('NAMESPACE', 'EVENT', {}).action).toBe(
                autoScriptUtils.ACTION.EMIT,
            );
        });
        it('should have namespace and data', () => {
            const mockNamespace = 'NAMESPACE';
            const mockEvent = 'EVENT';
            const mockData = {};
            const emitObject = autoScriptUtils.emit(mockNamespace, mockEvent, mockData);
            expect(emitObject.namespace).toBe(mockNamespace);
            expect(emitObject.data[0]).toBe(mockEvent);
            expect(emitObject.data[1]).toBe(mockData);
        });
        it('should handle data as a function', () => {
            const mockFunction = () => {};
            expect(autoScriptUtils.emit('NAMESPACE', mockFunction).data[0]).toBe(mockFunction);
        });
    });

    describe('disconnect', () => {
        it('should have action', () => {
            expect(autoScriptUtils.disconnect().action).toBe(autoScriptUtils.ACTION.DISCONNECT);
        });
    });
});
