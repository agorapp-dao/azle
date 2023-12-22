import fc from 'fast-check';
import { UniqueIdentifierArb } from '../../unique_identifier_arb';
import {
    CandidDefinition,
    DefinitionConstraints,
    RecursiveCandidDefinitionMemo,
    RecursiveCandidDefinition,
    RecursiveGlobalDefinition
} from '../candid_definition_arb/types';
import { recursive } from '.';

export function RecursiveDefinitionArb(
    candidTypeArbForInnerType: RecursiveCandidDefinitionMemo,
    parents: RecursiveCandidDefinition[],
    constraints: DefinitionConstraints
): fc.Arbitrary<RecursiveGlobalDefinition> {
    return UniqueIdentifierArb('typeDeclaration')
        .chain((name): fc.Arbitrary<RecursiveCandidDefinition> => {
            const recCanDef: RecursiveCandidDefinition = {
                candidMeta: {
                    candidType: 'Recursive',
                    candidTypeObject: name,
                    candidTypeAnnotation: `typeof ${name}.tsType`,
                    imports: new Set(),
                    variableAliasDeclarations: []
                },
                name
            };
            return fc.constant(recCanDef);
        })
        .chain((innerRecDef) => {
            return fc.tuple(
                candidTypeArbForInnerType([innerRecDef, ...parents], {
                    recursive_weights: true, // This should be true so that the below weights will be respected all the way down. Until those issues are resolved we can't have blobs, tuples or vecs anywhere in any recursive shapes
                    weights: {
                        blob: 0,
                        tuple: 0,
                        vec: 0
                        // TODO there are a lot of bugs with recursion so we are disabling the problematic types until the issues are resolved
                        // https://github.com/demergent-labs/azle/issues/1518
                        // https://github.com/demergent-labs/azle/issues/1513
                        // https://github.com/demergent-labs/azle/issues/1525
                    }
                })(constraints.n ?? 0),
                fc.constant(innerRecDef)
            );
        })
        .map(([innerType, recCanDef]) => {
            const {
                name,
                candidMeta: { candidTypeObject, candidTypeAnnotation }
            } = recCanDef;
            const variableAliasDeclarations = generateVariableAliasDeclarations(
                name,
                innerType
            );

            const imports = generateImports(innerType);

            const shape: RecursiveGlobalDefinition = {
                candidMeta: {
                    candidTypeObject,
                    candidTypeAnnotation,
                    variableAliasDeclarations,
                    imports,
                    candidType: 'Recursive'
                },
                name,
                innerType
            };

            recursive.shapes[name] = shape;

            return shape;
        });
}

function generateVariableAliasDeclarations(
    name: string,
    innerType: CandidDefinition
): string[] {
    return [
        `const ${name} = Recursive(() => ${innerType.candidMeta.candidTypeObject});`,
        ...innerType.candidMeta.variableAliasDeclarations
    ];
}

function generateImports(innerType: CandidDefinition): Set<string> {
    return new Set([...innerType.candidMeta.imports, 'Recursive']);
}
