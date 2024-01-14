import { Void } from '../candid/types/primitive/void';
import { nat } from '../candid/types/primitive/nats/nat';
import { blob } from '../candid/types/constructed/blob';
import { Principal } from '../candid/types/reference/principal';
import { text } from '../candid/types/primitive/text';
/**
 * Like notify, but sends the argument as raw bytes, skipping Candid serialization.
 * @param canisterId
 * @param method
 * @param argsRaw
 * @param payment
 * @returns
 */
export declare function notifyRaw(canisterId: Principal, method: text, argsRaw: blob, payment: nat): Void;
