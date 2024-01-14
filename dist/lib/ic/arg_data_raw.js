"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argDataRaw = void 0;
/**
 * Returns the argument data as bytes.
 * @returns the argument data
 */
function argDataRaw() {
    return globalThis._azleIc
        ? new Uint8Array(globalThis._azleIc.argDataRaw())
        : undefined;
}
exports.argDataRaw = argDataRaw;
