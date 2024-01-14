"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stableWrite = void 0;
/**
 * Writes data to the stable memory location specified by an offset
 *
 * **Warning:** this will panic if `offset` + `buffer.length` exceeds the
 * current size of stable memory. Use {@link ic.stableGrow} to request more
 * stable memory if needed.
 * @param offset the location at which to write
 * @param buffer the data to write
 */
function stableWrite(offset, buf) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    return globalThis._azleIc.stableWrite(offset.toString(), buf.buffer);
}
exports.stableWrite = stableWrite;
