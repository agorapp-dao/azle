import { nat64 } from '../candid/types/primitive/nats/nat64';
/**
 * Reads data from the stable memory location specified by an offset.
 * Supports 64-bit addressed memory.
 * @param offset the location from which to read
 * @param length the length of buffer to read
 * @returns the raw bytes in stable memory
 */
export declare function stable64Read(offset: nat64, length: nat64): Uint8Array;
