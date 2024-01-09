import { IDL } from '@dfinity/candid';
import { CandidType } from '../../candid_type';
import { Parent } from '../../to_idl';
export type CandidMap = {
    [key: string]: CandidType;
};
export type IdlMap = {
    [key: string]: IDL.Type<any>;
};
export declare function toIdlMap(candidMap: CandidMap, parent: Parent[]): IdlMap;
