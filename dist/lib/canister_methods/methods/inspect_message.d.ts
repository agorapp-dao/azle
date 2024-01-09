import { Void } from '../../candid/types/primitive/void';
import { CanisterMethodInfo } from '../types/canister_method_info';
export declare function inspectMessage(callback: () => void | Promise<void>): CanisterMethodInfo<[], Void>;
