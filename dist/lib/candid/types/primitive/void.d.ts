import { IDL } from '@dfinity/candid';
export declare class AzleVoid {
    _azleKind: 'AzleVoid';
    static _azleKind: 'AzleVoid';
    static tsType: Void;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(): IDL.Type<any>;
}
export declare const Void: typeof AzleVoid;
export type Void = void;
