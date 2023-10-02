import { CandidType } from '..';
import { v4 } from 'uuid';
import {
    Principal,
    Parent,
    toParamIDLTypes,
    toReturnIDLType,
    IDL
} from '../../';

type Mode = 'query' | 'update' | 'oneway';

const modeToCandid = {
    query: ['query'],
    oneway: ['oneway'],
    update: [] // TODO what is the proper way to do updates
};

export function Func(
    paramsIdls: CandidType[],
    returnIdl: CandidType,
    mode: Mode
): [Principal, string] & { _azleCandidType?: '_azleCandidType' } {
    // TODO can't Func be recursive?
    // TODO can't Opt be recursive?
    // const name = v4();

    return {
        getIDL(parents: Parent[]) {
            return IDL.Func(
                toParamIDLTypes(paramsIdls, parents),
                toReturnIDLType(returnIdl, parents),
                modeToCandid[mode]
            );
        }
    } as any;
}
