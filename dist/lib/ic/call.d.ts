import { nat } from '../candid/types/primitive/nats/nat';
import { nat64 } from '../candid/types/primitive/nats/nat64';
import { ArgsType } from './types/args_type';
import { ReturnTypeOf } from './types/return_type_of';
/**
 * Performs an asynchronous call to another canister.
 *
 * Note that the asynchronous call must be awaited in order for the
 * inter-canister call to be made using the System API.
 *
 * @param method
 * @param config
 * @returns
 */
export declare function call<T extends (...args: any[]) => any>(method: T, config?: {
    args?: ArgsType<T>;
    cycles?: nat64;
    cycles128?: nat;
}): ReturnTypeOf<T>;
