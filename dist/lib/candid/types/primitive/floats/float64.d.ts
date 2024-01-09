import { IDL } from '@dfinity/candid';
export declare class AzleFloat64 {
    _azleKind: 'AzleFloat64';
    static _azleKind: 'AzleFloat64';
    static tsType: float64;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.FloatClass;
}
export declare const float64: typeof AzleFloat64;
export type float64 = number;
