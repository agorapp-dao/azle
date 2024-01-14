import { CandidType } from '../../candid/candid_type';
import { TypeMapping } from '../../candid/type_mapping';
import { Callback } from '../types/callback';
import { CanisterMethodInfo } from '../types/canister_method_info';
import { MethodArgs } from '../types/method_args';
export declare function query<const Params extends ReadonlyArray<CandidType>, Return extends CandidType, GenericCallback extends Callback<Params, Return>>(paramCandidTypes: Params, returnCandidType: Return, callback?: Awaited<ReturnType<GenericCallback>> extends TypeMapping<Return> ? GenericCallback : never, methodArgs?: MethodArgs): CanisterMethodInfo<Params, Return>;
