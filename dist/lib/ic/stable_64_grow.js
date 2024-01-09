"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stable64Grow = void 0;
/**
 * Attempts to grow the stable memory by `newPages`.
 * Supports 64-bit addressed memory.
 * @param newPages
 * @returns the previous size that was reserved.
 */
function stable64Grow(newPages) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    return BigInt(globalThis._azleIc.stable64Grow(newPages.toString()));
}
exports.stable64Grow = stable64Grow;
