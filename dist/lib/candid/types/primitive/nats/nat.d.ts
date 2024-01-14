import { IDL } from '@dfinity/candid';
export declare class AzleNat {
    _azleKind: 'AzleNat';
    static _azleKind: 'AzleNat';
    static tsType: nat;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.NatClass;
}
export declare const nat: typeof AzleNat;
export type nat = bigint;
