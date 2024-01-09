import { Principal } from '../candid/types/reference/principal';
import { bool } from '../candid/types/primitive/bool';
/** Determine if a {@link Principal} is a controller of the canister. */
export declare function isController(principal: Principal): bool;
