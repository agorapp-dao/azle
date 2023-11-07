import { IDL } from '@dfinity/candid';
import { toIdlMap, CandidMap } from './to_idl_map';
import { CandidType } from '../../candid_type';
import { TypeMapping } from '../../type_mapping';
import { Parent } from '../../to_idl';
import { encode } from '../../serde/encode';
import { decode } from '../../serde/decode';
import { Serializable } from '../../../stable_b_tree_map';

export function Record<
    T extends {
        [K in keyof T]: CandidType;
    }
>(
    obj: T
): {
    [K in keyof T]: TypeMapping<T[K]>;
} & CandidType &
    Partial<Serializable> {
    return {
        ...obj,
        toBytes(data: any) {
            return encode(this, data);
        },
        fromBytes(bytes: Uint8Array) {
            return decode(this, bytes);
        },
        getIdl(parents: Parent[]) {
            return IDL.Record(toIdlMap(obj as CandidMap, parents));
        }
    } as any;
}
