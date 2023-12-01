import { Principal } from '@dfinity/principal';

import { CandidDefinitionArb } from '../../definition_arb';
import { FuncArb as Base } from './base';

export type Func = [Principal, string];

export const FuncArb = Base(CandidDefinitionArb);
