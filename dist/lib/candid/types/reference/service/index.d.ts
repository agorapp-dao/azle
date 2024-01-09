import { CanisterMethodInfo } from '../../../../canister_methods/types/canister_method_info';
import { CandidType, TypeMapping } from '../../../index';
import { Principal } from '../principal';
type CanisterOptions = {
    [key: string]: CanisterMethodInfo<any, any>;
};
type CanisterReturn<T extends CanisterOptions> = {
    [EndpointName in keyof T]: T[EndpointName] extends CanisterMethodInfo<infer Params, infer Return> ? (...args: {
        [K in keyof Params]: TypeMapping<Params[K]>;
    }) => Promise<TypeMapping<Return>> : never;
};
type CallableObject<T extends CanisterOptions> = {
    (principal: Principal): CallableObject<T> & CandidType;
} & CanisterReturn<T>;
export declare function Canister<T extends CanisterOptions>(canisterOptions: T): CallableObject<T> & CandidType;
export {};
