import { IDL } from '@dfinity/candid';
import { encode } from '../../serde/encode';
import { decode } from '../../serde/decode';

export class AzleEmpty {
    _azleKind: 'AzleEmpty' = 'AzleEmpty';
    static _azleKind: 'AzleEmpty' = 'AzleEmpty';

    _azleCandidType?: '_azleCandidType' = '_azleCandidType';
    static _azleCandidType?: '_azleCandidType' = '_azleCandidType';

    static toBytes(data: any) {
        return encode(this, data);
    }

    static fromBytes(bytes: Uint8Array) {
        return decode(this, bytes);
    }

    static getIdl() {
        return IDL.Empty;
    }
}

export const empty = AzleEmpty;
export type empty = never;
