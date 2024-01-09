import { CandidType } from '../candid/candid_type';
import { CanisterMethodInfo } from './types/canister_method_info';
export declare function executeMethod(mode: CanisterMethodInfo<any, any>['mode'], args: any[], callback: any, paramCandidTypes: CandidType[], returnCandidType: CandidType, manual: boolean): void;
