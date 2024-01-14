import { CandidType, Parent } from '../../index';
import { IDL } from '@dfinity/candid';
import { Principal } from './principal';
type Mode = 'query' | 'update' | 'oneway';
export declare function Func(paramCandidTypes: CandidType[], returnCandidTypes: CandidType, mode: Mode): {
    tsType: [Principal, string];
    toBytes(data: any): Uint8Array;
    fromBytes(bytes: Uint8Array): any;
    getIdl(parents: Parent[]): IDL.FuncClass;
};
export {};
