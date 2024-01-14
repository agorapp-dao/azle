"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stableGrow = void 0;
/**
 * Attempts to grow the stable memory by `newPages`.
 * @param newPages
 * @returns the previous size that was reserved.
 */
function stableGrow(newPages) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    return Number(globalThis._azleIc.stableGrow(newPages.toString()));
}
exports.stableGrow = stableGrow;
