"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUpgrade = void 0;
const void_1 = require("../../candid/types/primitive/void");
const execute_method_1 = require("../execute_method");
function postUpgrade(paramCandidTypes, callback) {
    const finalCallback = callback === undefined
        ? undefined
        : (...args) => {
            (0, execute_method_1.executeMethod)('postUpgrade', args, callback, paramCandidTypes, void_1.Void, false);
        };
    return {
        mode: 'postUpgrade',
        callback: finalCallback,
        paramCandidTypes: paramCandidTypes,
        returnCandidType: void_1.Void,
        async: false,
        guard: undefined
    };
}
exports.postUpgrade = postUpgrade;
