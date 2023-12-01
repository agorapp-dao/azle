import fc from 'fast-check';

import { CandidValueAndMeta } from '../../value_and_meta_arb';
import { Func } from './index';
import { CandidDefinition } from '../../definition_arb/types';
import { FuncDefinitionArb } from './definition_arb';
import { FuncValueArb } from './values_arb';
import { ComplexCandidValueAndMetaArb } from '../../complex_value_and_meta_arb';

export function FuncArb(
    candidDefinitionArb: fc.Arbitrary<CandidDefinition>
): fc.Arbitrary<CandidValueAndMeta<Func>> {
    return ComplexCandidValueAndMetaArb(
        FuncDefinitionArb(candidDefinitionArb),
        () => FuncValueArb
    );
}
