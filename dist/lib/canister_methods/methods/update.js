"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const execute_method_1 = require("../execute_method");
const is_async_1 = require("../is_async");
function update(paramCandidTypes, returnCandidType, callback, methodArgs) {
    const finalCallback = callback === undefined
        ? undefined
        : (...args) => {
            (0, execute_method_1.executeMethod)('update', args, callback, paramCandidTypes, returnCandidType, methodArgs?.manual ?? false);
        };
    return {
        mode: 'update',
        callback: finalCallback,
        paramCandidTypes: paramCandidTypes,
        returnCandidType,
        async: callback === undefined ? false : (0, is_async_1.isAsync)(callback),
        guard: methodArgs?.guard
    };
}
exports.update = update;
