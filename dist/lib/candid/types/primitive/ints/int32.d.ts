import { IDL } from '@dfinity/candid';
export declare class AzleInt32 {
    _azleKind: 'AzleInt32';
    static _azleKind: 'AzleInt32';
    static tsType: int32;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.FixedIntClass;
}
export declare const int32: typeof AzleInt32;
export type int32 = number & {
    _azleKind?: 'AzleInt32';
};
