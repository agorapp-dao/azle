"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stable64Read = void 0;
const nat64_1 = require("../candid/types/primitive/nats/nat64");
const encode_1 = require("../candid/serde/encode");
/**
 * Reads data from the stable memory location specified by an offset.
 * Supports 64-bit addressed memory.
 * @param offset the location from which to read
 * @param length the length of buffer to read
 * @returns the raw bytes in stable memory
 */
function stable64Read(offset, length) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const paramsCandidBytes = (0, encode_1.encode)([nat64_1.nat64, nat64_1.nat64], [offset, length]).buffer;
    return new Uint8Array(globalThis._azleIc.stable64Read(offset.toString(), length.toString()));
}
exports.stable64Read = stable64Read;
