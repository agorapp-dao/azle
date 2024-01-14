"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stableBytes = void 0;
/**
 * Gets a copy of stable memory
 *
 * **Note:** This will map the whole memory, even if not all of it has
 * been written to.
 * @returns a copy of the stable memory
 */
function stableBytes() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    return new Uint8Array(globalThis._azleIc.stableBytes());
}
exports.stableBytes = stableBytes;
