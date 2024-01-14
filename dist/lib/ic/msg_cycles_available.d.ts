import { nat64 } from '../candid/types/primitive/nats/nat64';
/**
 * Returns the amount of cycles that were transferred by the caller of the
 * current call, and is still available in this message
 * @returns the amount of cycles
 */
export declare function msgCyclesAvailable(): nat64;
