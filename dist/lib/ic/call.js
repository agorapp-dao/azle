"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.call = void 0;
const call_raw_1 = require("./call_raw");
const call_raw_128_1 = require("./call_raw_128");
/**
 * Performs an asynchronous call to another canister.
 *
 * Note that the asynchronous call must be awaited in order for the
 * inter-canister call to be made using the System API.
 *
 * @param method
 * @param config
 * @returns
 */
function call(method, config) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const { callFunction, cycles } = getCallFunctionAndCycles(config?.cycles, config?.cycles128);
    return method(false, callFunction, cycles, config?.args ?? []);
}
exports.call = call;
function getCallFunctionAndCycles(cycles, cycles128) {
    if (cycles128 !== undefined) {
        return {
            callFunction: call_raw_128_1.callRaw128,
            cycles: cycles128
        };
    }
    return {
        callFunction: call_raw_1.callRaw,
        cycles: cycles ?? 0n
    };
}
