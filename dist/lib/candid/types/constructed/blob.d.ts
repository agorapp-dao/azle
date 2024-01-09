import { IDL } from '@dfinity/candid';
export declare class AzleBlob {
    _azleKind: 'AzleBlob';
    static _azleKind: 'AzleBlob';
    static tsType: blob;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.VecClass<number | bigint>;
}
export declare const blob: typeof AzleBlob;
export type blob = Uint8Array;
