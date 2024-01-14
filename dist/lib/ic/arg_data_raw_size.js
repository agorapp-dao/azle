"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argDataRawSize = void 0;
/**
 * Gets the length of the raw-argument-data-bytes
 * @returns the data size
 */
function argDataRawSize() {
    return globalThis._azleIc
        ? globalThis._azleIc.argDataRawSize()
        : undefined;
}
exports.argDataRawSize = argDataRawSize;
