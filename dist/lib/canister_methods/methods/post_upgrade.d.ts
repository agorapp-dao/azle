import { CandidType } from '../../candid/candid_type';
import { TypeMapping } from '../../candid/type_mapping';
import { Void } from '../../candid/types/primitive/void';
import { Callback } from '../types/callback';
import { CanisterMethodInfo } from '../types/canister_method_info';
export declare function postUpgrade<const Params extends ReadonlyArray<CandidType>, GenericCallback extends Callback<Params, typeof Void>>(paramCandidTypes: Params, callback?: Awaited<ReturnType<GenericCallback>> extends TypeMapping<Void> ? GenericCallback : never): CanisterMethodInfo<Params, Void>;
