"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trap = void 0;
/**
 * Stops execution and rejects the current request with a `CANISTER_ERROR`
 * (5) rejection code and the provided message
 * @param message the rejection message
 */
function trap(message) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    return globalThis._azleIc.trap(message);
}
exports.trap = trap;
