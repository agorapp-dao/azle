import { IDL } from '@dfinity/candid';
import { Principal as DfinityPrincipal } from '@dfinity/principal';
import { Parent } from '../../to_idl';
export declare class Principal extends DfinityPrincipal {
    static _azleKind: 'Principal';
    static tsType: Principal;
    static toBytes(data: any): Uint8Array;
    static fromBytes(bytes: Uint8Array): any;
    static getIdl(_parents: Parent[]): IDL.PrincipalClass;
}
