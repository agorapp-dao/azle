import { IDL } from '@dfinity/candid';
export declare class AzleNat16 {
    _azleKind: 'AzleNat16';
    static _azleKind: 'AzleNat16';
    static tsType: nat16;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.FixedNatClass;
}
export declare const nat16: typeof AzleNat16;
export type nat16 = number & {
    _azleKind?: 'AzleNat16';
};
