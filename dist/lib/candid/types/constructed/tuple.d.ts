import { CandidType } from '../../candid_type';
import { Parent } from '../../to_idl';
import { IDL } from '@dfinity/candid';
import { TypeMapping } from '../../type_mapping';
export declare class AzleTuple<T extends any[]> {
    constructor(t: CandidType[]);
    tsType: {
        [P in keyof T]: TypeMapping<T[P]>;
    };
    innerTypes: CandidType[];
    _azleKind: 'AzleTuple';
    static _azleKind: 'AzleTuple';
    toBytes(data: any): Uint8Array;
    fromBytes(bytes: Uint8Array): any;
    getIdl(parents: Parent[]): IDL.TupleClass<IDL.Type<any>[]>;
}
export declare function Tuple<T extends CandidType[]>(...types: T): AzleTuple<T>;
export type Tuple<T> = T;
