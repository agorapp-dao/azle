"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.time = void 0;
/**
 * Gets current timestamp, in nanoseconds since the epoch (1970-01-01)
 * @returns the current timestamp
 */
function time() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    return BigInt(globalThis._azleIc.time());
}
exports.time = time;
