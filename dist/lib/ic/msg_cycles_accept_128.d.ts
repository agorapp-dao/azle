import { nat } from '../candid/types/primitive/nats/nat';
/**
 * Moves cycles from the call to the canister balance
 * @param maxAmount the max amount of cycles to move
 * @returns the actual amount moved
 */
export declare function msgCyclesAccept128(maxAmount: nat): nat;
