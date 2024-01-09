import { IDL } from '@dfinity/candid';
export declare class AzleInt64 {
    _azleKind: 'AzleInt64';
    static _azleKind: 'AzleInt64';
    static tsType: int64;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.FixedIntClass;
}
export declare const int64: typeof AzleInt64;
export type int64 = bigint & {
    _azleKind?: 'AzleInt64';
};
