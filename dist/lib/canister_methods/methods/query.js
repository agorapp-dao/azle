"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const execute_method_1 = require("../execute_method");
const is_async_1 = require("../is_async");
function query(paramCandidTypes, returnCandidType, callback, methodArgs) {
    // TODO maybe the cross canister callback should be made here?
    const finalCallback = callback === undefined
        ? undefined
        : (...args) => {
            (0, execute_method_1.executeMethod)('query', args, callback, paramCandidTypes, returnCandidType, methodArgs?.manual ?? false);
        };
    return {
        mode: 'query',
        callback: finalCallback,
        paramCandidTypes: paramCandidTypes,
        returnCandidType,
        async: callback === undefined ? false : (0, is_async_1.isAsync)(callback),
        guard: methodArgs?.guard
    };
}
exports.query = query;
