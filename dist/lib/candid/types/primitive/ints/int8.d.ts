import { IDL } from '@dfinity/candid';
export declare class AzleInt8 {
    _azleKind: 'AzleInt8';
    static _azleKind: 'AzleInt8';
    static tsType: int8;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.FixedIntClass;
}
export declare const int8: typeof AzleInt8;
export type int8 = number & {
    _azleKind?: 'AzleInt8';
};
