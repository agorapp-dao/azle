import { Principal } from '../';
import { blob } from '../candid/types/constructed/blob';
import { nat } from '../candid/types/primitive/nats/nat';
import { text } from '../candid/types/primitive/text';
/**
 * Performs an asynchronous call to another canister using the [System API](
 * https://internetcomputer.org/docs/current/references/ic-interface-spec/#system-api-call)
 * and returns the payload without serialization
 * @param canisterId the principal of the canister to call
 * @param method the method to call
 * @param argsRaw the args to pass to the canister method
 * @param payment the number of cycles to send with the call
 * @returns
 */
export declare function callRaw128(canisterId: Principal, method: text, argsRaw: blob, payment: nat): Promise<blob>;
