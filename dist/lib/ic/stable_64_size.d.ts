import { nat64 } from '../candid/types/primitive/nats/nat64';
/**
 * Gets current size of the stable memory (in WASM pages). Supports 64-bit
 * addressed memory.
 * @returns the current memory size
 */
export declare function stable64Size(): nat64;
