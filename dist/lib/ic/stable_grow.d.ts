import { nat32 } from '../candid/types/primitive/nats/nat32';
/**
 * Attempts to grow the stable memory by `newPages`.
 * @param newPages
 * @returns the previous size that was reserved.
 */
export declare function stableGrow(newPages: nat32): nat32;
