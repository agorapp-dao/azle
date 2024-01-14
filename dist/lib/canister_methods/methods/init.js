"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const void_1 = require("../../candid/types/primitive/void");
const execute_method_1 = require("../execute_method");
function init(paramCandidTypes, callback) {
    const finalCallback = callback === undefined
        ? undefined
        : (...args) => {
            (0, execute_method_1.executeMethod)('init', args, callback, paramCandidTypes, void_1.Void, false);
        };
    return {
        mode: 'init',
        callback: finalCallback,
        paramCandidTypes: paramCandidTypes,
        returnCandidType: void_1.Void,
        async: false,
        guard: undefined
    };
}
exports.init = init;
