import fc from 'fast-check';
import { bigintToSrcLiteral } from '../../to_src_literal/bigint';
import { SimpleCandidDefinitionArb } from '../../simple_type_arbs/definition_arb';
import { SimpleCandidValuesArb } from '../../simple_type_arbs/values_arb';
import { CandidValueAndMetaArbGenerator } from '../../candid_value_and_meta_arb_generator';
import { CandidValueAndMeta } from '../../candid_value_and_meta_arb';
import { NatCandidDefinition } from '../../candid_definition_arb/types';
import { CandidValues } from '../../candid_values_arb';

export function Nat64Arb(): fc.Arbitrary<CandidValueAndMeta<bigint>> {
    return CandidValueAndMetaArbGenerator(Nat64DefinitionArb(), Nat64ValueArb);
}

export function Nat64DefinitionArb(): fc.Arbitrary<NatCandidDefinition> {
    return SimpleCandidDefinitionArb('nat64');
}

export function Nat64ValueArb(): fc.Arbitrary<CandidValues<bigint>> {
    return SimpleCandidValuesArb(fc.bigUintN(64), bigintToSrcLiteral);
}
