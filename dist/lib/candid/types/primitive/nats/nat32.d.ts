import { IDL } from '@dfinity/candid';
export declare class AzleNat32 {
    _azleKind: 'AzleNat32';
    static _azleKind: 'AzleNat32';
    static tsType: nat32;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.FixedNatClass;
}
export declare const nat32: typeof AzleNat32;
export type nat32 = number & {
    _azleKind?: 'AzleNat32';
};
