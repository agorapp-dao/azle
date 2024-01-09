import { nat32 } from '../candid/types/primitive/nats/nat32';
/**
 * Reads data from the stable memory location specified by an offset
 * @param offset the location from which to read
 * @param length the length of buffer to read
 * @returns the raw bytes in stable memory
 */
export declare function stableRead(offset: nat32, length: nat32): Uint8Array;
