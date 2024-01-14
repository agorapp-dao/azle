import { nat64 } from '../candid/types/primitive/nats/nat64';
/**
 * Attempts to grow the stable memory by `newPages`.
 * Supports 64-bit addressed memory.
 * @param newPages
 * @returns the previous size that was reserved.
 */
export declare function stable64Grow(newPages: nat64): nat64;
