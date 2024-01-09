import { IDL } from '@dfinity/candid';
export declare class AzleNull {
    _azleKind: 'AzleNull';
    static _azleKind: 'AzleNull';
    static tsType: Null;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.NullClass;
}
export declare const Null: typeof AzleNull;
export type Null = null;
