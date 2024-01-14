import { nat64 } from '../candid/types/primitive/nats/nat64';
/**
 * Returns the number of instructions that the canister executed since the
 * last [entry point](
 *   https://internetcomputer.org/docs/current/references/ic-interface-spec/#entry-points
 * )
 *
 * @returns the number of instructions
 */
export declare function instructionCounter(): nat64;
