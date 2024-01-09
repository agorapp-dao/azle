import { nat32 } from '../candid/types/primitive/nats/nat32';
import { nat64 } from '../candid/types/primitive/nats/nat64';
/**
 * Gets the value of the specified performance counter
 *
 * @param counterType the type of performance counter to use. Currently `0`
 * (instruction counter) is the only supported type. It returns the number
 * of WebAssembly instructions the system has determined that the canister
 * has executed.
 * @returns the performance counter metric
 */
export declare function performanceCounter(counterType: nat32): nat64;
