import { IDL } from '@dfinity/candid';
export declare class AzleNat64 {
    _azleKind: 'AzleNat64';
    static _azleKind: 'AzleNat64';
    static tsType: nat64;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.FixedNatClass;
}
export declare const nat64: typeof AzleNat64;
export type nat64 = bigint & {
    _azleKind?: 'AzleNat64';
};
