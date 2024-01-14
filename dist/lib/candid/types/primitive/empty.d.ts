import { IDL } from '@dfinity/candid';
export declare class AzleEmpty {
    _azleKind: 'AzleEmpty';
    static _azleKind: 'AzleEmpty';
    static tsType: empty;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.EmptyClass;
}
export declare const empty: typeof AzleEmpty;
export type empty = never;
