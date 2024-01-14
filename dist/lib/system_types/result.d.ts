import { CandidType } from '../candid/candid_type';
import { Parent } from '../candid/to_idl';
import { RequireExactlyOne } from '../candid/types/constructed/variant';
import { IDL } from '@dfinity/candid';
export declare class AzleResult<T extends CandidType, K extends CandidType> {
    constructor(ok: T, err: K);
    Ok: T;
    Err: K;
    getIdl(parents: Parent[]): IDL.VariantClass;
}
export declare function Result<Ok extends CandidType, Err extends CandidType>(ok: Ok, err: Err): AzleResult<Ok, Err>;
export type Result<Ok, Err> = RequireExactlyOne<{
    Ok: Ok;
    Err: Err;
}>;
export declare namespace Result {
    function Ok<T>(value: T): {
        Ok: T;
    };
    function Err<T>(value: T): {
        Err: T;
    };
}
export declare function Ok<T>(value: T): {
    Ok: T;
};
export declare function Err<T>(value: T): {
    Err: T;
};
