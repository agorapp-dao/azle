import { IDL } from '@dfinity/candid';
export declare class AzleInt {
    _azleKind: 'AzleInt';
    static _azleKind: 'AzleInt';
    static tsType: int;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.IntClass;
}
export declare const int: typeof AzleInt;
export type int = bigint;
