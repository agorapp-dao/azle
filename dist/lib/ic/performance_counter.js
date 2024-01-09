"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performanceCounter = void 0;
/**
 * Gets the value of the specified performance counter
 *
 * @param counterType the type of performance counter to use. Currently `0`
 * (instruction counter) is the only supported type. It returns the number
 * of WebAssembly instructions the system has determined that the canister
 * has executed.
 * @returns the performance counter metric
 */
function performanceCounter(counterType) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const performanceCounterString = globalThis._azleIc.performanceCounter(counterType.toString());
    return BigInt(performanceCounterString);
}
exports.performanceCounter = performanceCounter;
