"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inspectMessage = void 0;
const void_1 = require("../../candid/types/primitive/void");
const execute_method_1 = require("../execute_method");
function inspectMessage(callback) {
    const finalCallback = (...args) => {
        (0, execute_method_1.executeMethod)('inspectMessage', args, callback, [], void_1.Void, false);
    };
    return {
        mode: 'inspectMessage',
        callback: finalCallback,
        paramCandidTypes: [],
        returnCandidType: void_1.Void,
        async: false,
        guard: undefined
    };
}
exports.inspectMessage = inspectMessage;
