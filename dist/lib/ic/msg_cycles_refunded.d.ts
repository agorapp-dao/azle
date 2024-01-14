import { nat64 } from '../candid/types/primitive/nats/nat64';
/**
 * Returns the amount of cycles that came back with the response as a refund.
 * The refund has already been added to the canister balance automatically.
 * @returns the amount of cycles
 */
export declare function msgCyclesRefunded(): nat64;
