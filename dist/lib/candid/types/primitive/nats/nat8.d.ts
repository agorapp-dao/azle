import { IDL } from '@dfinity/candid';
export declare class AzleNat8 {
    _azleKind: 'AzleNat8';
    static _azleKind: 'AzleNat8';
    static tsType: nat8;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.FixedNatClass;
}
export declare const nat8: typeof AzleNat8;
export type nat8 = number & {
    _azleKind?: 'AzleNat8';
};
