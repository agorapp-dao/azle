"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stableRead = void 0;
/**
 * Reads data from the stable memory location specified by an offset
 * @param offset the location from which to read
 * @param length the length of buffer to read
 * @returns the raw bytes in stable memory
 */
function stableRead(offset, length) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    return new Uint8Array(globalThis._azleIc.stableRead(offset.toString(), length.toString()));
}
exports.stableRead = stableRead;
