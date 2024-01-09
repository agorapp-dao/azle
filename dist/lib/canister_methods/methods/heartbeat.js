"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heartbeat = void 0;
const ic_1 = require("../../ic");
const void_1 = require("../../candid/types/primitive/void");
const is_async_1 = require("../is_async");
function heartbeat(callback) {
    return {
        mode: 'heartbeat',
        callback: () => executeHeartbeat(callback),
        paramCandidTypes: [],
        returnCandidType: void_1.Void,
        async: (0, is_async_1.isAsync)(callback),
        guard: undefined
    };
}
exports.heartbeat = heartbeat;
function executeHeartbeat(callback) {
    const result = callback();
    if (result !== undefined &&
        result !== null &&
        typeof result.then === 'function') {
        result.catch((error) => {
            ic_1.ic.trap(error.toString());
        });
    }
    return;
}
