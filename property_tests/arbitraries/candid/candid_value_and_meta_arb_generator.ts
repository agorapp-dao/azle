import fc from 'fast-check';
import { CorrespondingJSType } from './corresponding_js_type';
import { CandidDefinition } from './candid_definition_arb/types';
import { CandidValueAndMeta } from './candid_value_and_meta_arb';
import { CandidValues } from './candid_values_arb';
import { DEFAULT_VALUE_MAX_DEPTH } from '../config';

export function CandidValueAndMetaArbGenerator<
    T extends CorrespondingJSType,
    D extends CandidDefinition,
    V extends CandidValues<T>
>(
    DefinitionArb: fc.Arbitrary<D>,
    ValueArb: (arb: D, n: number) => fc.Arbitrary<V>,
    n: number = DEFAULT_VALUE_MAX_DEPTH
): fc.Arbitrary<CandidValueAndMeta<any>> {
    return DefinitionArb.chain((candidDefinition) =>
        fc.tuple(fc.constant(candidDefinition), ValueArb(candidDefinition, n))
    ).map(
        ([
            {
                candidMeta: {
                    candidTypeAnnotation,
                    candidTypeObject,
                    variableAliasDeclarations,
                    imports
                }
            },
            { agentArgumentValue, agentResponseValue, valueLiteral }
        ]) => {
            return {
                src: {
                    candidTypeAnnotation,
                    candidTypeObject,
                    variableAliasDeclarations,
                    imports,
                    valueLiteral
                },
                agentArgumentValue,
                agentResponseValue
            };
        }
    );
}
