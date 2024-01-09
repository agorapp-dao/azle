"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preUpgrade = void 0;
const void_1 = require("../../candid/types/primitive/void");
const is_async_1 = require("../is_async");
function preUpgrade(callback) {
    return {
        mode: 'preUpgrade',
        callback,
        paramCandidTypes: [],
        returnCandidType: void_1.Void,
        async: (0, is_async_1.isAsync)(callback),
        guard: undefined
    };
}
exports.preUpgrade = preUpgrade;
