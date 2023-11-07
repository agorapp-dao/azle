import { CandidType, Parent, toIdlArray } from '../../index';
import { IDL } from '@dfinity/candid';
import { Principal } from './principal';
import { encode } from '../../serde/encode';
import { decode } from '../../serde/decode';
import { Serializable } from '../../../stable_b_tree_map';

type Mode = 'query' | 'update' | 'oneway';

const modeToCandid = {
    query: ['query'],
    oneway: ['oneway'],
    update: []
};

export function Func(
    paramCandidTypes: CandidType[],
    returnCandidTypes: CandidType,
    mode: Mode
): [Principal, string] & CandidType & Partial<Serializable> {
    return {
        toBytes(data: any) {
            return encode(this, data);
        },
        fromBytes(bytes: Uint8Array) {
            return decode(this, bytes);
        },
        getIdl(parents: Parent[]) {
            return IDL.Func(
                toIdlArray(paramCandidTypes, parents),
                toIdlArray(returnCandidTypes, parents),
                modeToCandid[mode]
            );
        }
    } as any;
}
