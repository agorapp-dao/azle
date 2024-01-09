import { CandidType } from '../../candid_type';
import { Parent } from '../../to_idl';
import { TypeMapping } from '../../type_mapping';
import { RequireExactlyOne } from './variant';
import { IDL } from '@dfinity/candid';
/**
 * Represents an optional value: every {@link Opt} is either `Some` and contains
 * a value, or `None` and does not.
 */
export type Opt<T> = RequireExactlyOne<{
    Some: T;
    None: null;
}>;
/**
 * Wraps the provided value in a `Some` {@link Opt}
 * @param value - the value to be wrapped
 * @returns a `Some` {@link Opt} containing the provided value
 */
export declare function Some<T>(value: T): {
    Some: T;
};
/** An {@link Opt} representing the absence of a value */
export declare const None: {
    None: null;
};
export declare function Opt<T extends CandidType>(t: T): AzleOpt<T>;
export declare class AzleOpt<T> {
    constructor(t: any);
    tsType: RequireExactlyOne<{
        Some: TypeMapping<T>;
        None: null;
    }>;
    innerType: CandidType;
    _azleKind: 'AzleOpt';
    static _azleKind: 'AzleOpt';
    toBytes(data: any): Uint8Array;
    fromBytes(bytes: Uint8Array): any;
    getIdl(parents: Parent[]): IDL.OptClass<any>;
}
