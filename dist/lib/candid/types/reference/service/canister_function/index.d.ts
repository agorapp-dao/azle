import { Parent, CandidType } from '../../../../index';
import { Principal } from '../../principal';
import { IDL } from '@dfinity/candid';
import { CanisterMethodInfo } from '../../../../../canister_methods/types/canister_method_info';
export type CanisterOptions = {
    [key: string]: CanisterMethodInfo<any, any>;
};
type _AzleFunctionReturnType = {
    (principal: Principal): void;
    init?: any;
    post_upgrade?: any;
    pre_upgrade?: any;
    heartbeat?: any;
    inspect_message?: any;
    queries?: any[];
    updates?: any[];
    callbacks?: any;
    getSystemFunctionIdls?: (parents: Parent[]) => IDL.FuncClass[];
    getIdl?: (parents: Parent[]) => IDL.Type<any>;
};
type FunctionInfo = {
    mode: 'query' | 'update';
    paramCandidTypes: CandidType[];
    returnCandidType: CandidType;
};
export interface ServiceFunctionInfo {
    [key: string]: FunctionInfo;
}
export declare function createCanisterFunction(canisterOptions: CanisterOptions): _AzleFunctionReturnType;
export {};
