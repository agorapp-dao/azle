"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.candidDecode = void 0;
/**
 * Converts a candid value into a Candid string
 * @param candidEncoded a raw Candid value
 * @returns the Candid string
 */
function candidDecode(candidEncoded) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    return globalThis._azleIc.candidDecode(candidEncoded.buffer);
}
exports.candidDecode = candidDecode;
