"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.candidEncode = void 0;
/**
 * Converts a Candid string into bytes
 * @param candidString a valid Candid string
 * @returns the candid value as bytes
 */
function candidEncode(candidString) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    return new Uint8Array(globalThis._azleIc.candidEncode(candidString));
}
exports.candidEncode = candidEncode;
