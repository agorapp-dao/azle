import { IDL } from '@dfinity/candid';
export declare class AzleInt16 {
    _azleKind: 'AzleInt16';
    static _azleKind: 'AzleInt16';
    static tsType: int16;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.FixedIntClass;
}
export declare const int16: typeof AzleInt16;
export type int16 = number & {
    _azleKind?: 'AzleInt16';
};
