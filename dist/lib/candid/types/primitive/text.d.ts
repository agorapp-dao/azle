import { IDL } from '@dfinity/candid';
export declare class AzleText {
    _azleKind: 'AzleText';
    static _azleKind: 'AzleText';
    static tsType: text;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.TextClass;
}
export declare const text: typeof AzleText;
export type text = string;
