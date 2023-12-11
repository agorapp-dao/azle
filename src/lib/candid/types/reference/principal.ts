import { IDL } from '../../../idl_export';
import { DfinityPrincipal } from '../../../principal_export';
import { encode } from '../../serde/encode';
import { decode } from '../../serde/decode';
import { Parent } from '../../to_idl';

export class Principal extends DfinityPrincipal {
    static _azleKind: 'Principal' = 'Principal';

    static tsType: Principal;

    static toBytes(data: any) {
        return encode(this, data);
    }

    static fromBytes(bytes: Uint8Array) {
        return decode(this, bytes);
    }

    static getIdl(_parents: Parent[]) {
        return IDL.Principal;
    }
}
