import { Parent } from '../../../../index';
import { IDL } from '@dfinity/candid';
import { CanisterOptions } from '.';
type SystemMethod = {
    name: string;
} | undefined;
export declare function createSystemMethod(mode: 'init' | 'postUpgrade' | 'preUpgrade' | 'heartbeat' | 'inspectMessage', canisterOptions: CanisterOptions): SystemMethod;
export declare function createGetSystemFunctionIdlFunction(canisterOptions: CanisterOptions): (parents: Parent[]) => IDL.FuncClass[];
export {};
