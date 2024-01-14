import { CandidType } from '../candid/candid_type';
import { Void } from '../candid/types/primitive/void';
/**
 * Used to manually reply to an ingress message. Intended to be used in
 * canister methods with a {@link Manual} return type.
 * @param reply the value with which to reply. Must by of type `T` where `T`
 * is the generic type supplied to `Manual<T>`. Otherwise will result in an
 * uncaught `TypeError`.
 */
export declare function reply(data: any, type: CandidType): Void;
