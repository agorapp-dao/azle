import { IDL } from '@dfinity/candid';
export declare class AzleBool {
    _azleKind: 'AzleBool';
    static _azleKind: 'AzleBool';
    static tsType: bool;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.BoolClass;
}
export declare const bool: typeof AzleBool;
export type bool = boolean;
