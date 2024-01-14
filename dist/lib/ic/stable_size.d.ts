import { nat32 } from '../candid/types/primitive/nats/nat32';
/**
 * Gets current size of the stable memory (in WASM pages)
 * @returns the current memory size
 */
export declare function stableSize(): nat32;
