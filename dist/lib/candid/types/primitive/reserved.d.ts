import { IDL } from '@dfinity/candid';
export declare class AzleReserved {
    _azleKind: 'AzleReserved';
    static _azleKind: 'AzleReserved';
    static tsType: reserved;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.ReservedClass;
}
export declare const reserved: typeof AzleReserved;
export type reserved = any;
