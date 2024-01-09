import { nat32 } from '../candid/types/primitive/nats/nat32';
import { blob } from '../candid/types/constructed/blob';
/**
 * Writes data to the stable memory location specified by an offset
 *
 * **Warning:** this will panic if `offset` + `buffer.length` exceeds the
 * current size of stable memory. Use {@link ic.stableGrow} to request more
 * stable memory if needed.
 * @param offset the location at which to write
 * @param buffer the data to write
 */
export declare function stableWrite(offset: nat32, buf: blob): void;
