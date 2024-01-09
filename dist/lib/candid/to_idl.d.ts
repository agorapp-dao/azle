import { IDL } from '@dfinity/candid';
import { CandidType } from './candid_type';
export type Parent = {
    idl: IDL.RecClass;
    name: string;
};
export declare function toIdl(candidType: CandidType, parents?: Parent[]): IDL.Type<any>;
export declare function toIdlArray(candidTypes: CandidType | CandidType[], parents?: Parent[]): IDL.Type<any>[];
