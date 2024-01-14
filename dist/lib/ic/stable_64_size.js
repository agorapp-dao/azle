"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stable64Size = void 0;
/**
 * Gets current size of the stable memory (in WASM pages). Supports 64-bit
 * addressed memory.
 * @returns the current memory size
 */
function stable64Size() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    return BigInt(globalThis._azleIc.stable64Size());
}
exports.stable64Size = stable64Size;
