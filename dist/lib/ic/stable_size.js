"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stableSize = void 0;
/**
 * Gets current size of the stable memory (in WASM pages)
 * @returns the current memory size
 */
function stableSize() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    return Number(globalThis._azleIc.stableSize());
}
exports.stableSize = stableSize;
