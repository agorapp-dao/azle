import { IDL } from '@dfinity/candid';
export declare class AzleFloat32 {
    _azleKind: 'AzleFloat32';
    static _azleKind: 'AzleFloat32';
    static tsType: float32;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.FloatClass;
}
export declare const float32: typeof AzleFloat32;
export type float32 = number;
