import { CandidArb } from '../../candid_arb';
import { NumberArb } from './';

export const Int32Arb = CandidArb(NumberArb(32), 'int32');
