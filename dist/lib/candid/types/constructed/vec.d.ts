import { CandidType } from '../../candid_type';
import { Parent } from '../../to_idl';
import { IDL } from '@dfinity/candid';
import { TypeMapping } from '../../type_mapping';
export declare class AzleVec<T> {
    constructor(t: any);
    tsType: TypeMapping<AzleVec<T>>;
    innerType: CandidType;
    _azleKind: 'AzleVec';
    static _azleKind: 'AzleVec';
    toBytes(data: any): Uint8Array;
    fromBytes(bytes: Uint8Array): any;
    getIdl(parents: Parent[]): IDL.VecClass<any>;
}
export type Vec<T> = TypeMapping<AzleVec<T>>;
export declare function Vec<T extends CandidType>(t: T): AzleVec<T>;
