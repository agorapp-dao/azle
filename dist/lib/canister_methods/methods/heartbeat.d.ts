import { Void } from '../../candid/types/primitive/void';
import { CanisterMethodInfo } from '../types/canister_method_info';
export declare function heartbeat(callback: () => void | Promise<void>): CanisterMethodInfo<[], Void>;
