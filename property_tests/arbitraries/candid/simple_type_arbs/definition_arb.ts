import fc from 'fast-check';
import { PrimitiveDefinition } from '../candid_definition_arb/types';
import { SimpleCandidType } from '../candid_type';
import { UniqueIdentifierArb } from '../../unique_identifier_arb';

export function SimpleCandidDefinitionArb(
    candidType: SimpleCandidType,
    useVariableAliasDeclaration?: boolean
): fc.Arbitrary<PrimitiveDefinition> {
    return fc
        .tuple(
            UniqueIdentifierArb('typeDeclaration'),
            useVariableAliasDeclarationArb(useVariableAliasDeclaration)
        )
        .map(([name, useTypeDeclaration]) => {
            const candidTypeAnnotation = candidType;
            const candidTypeObject = useTypeDeclaration ? name : candidType;
            const imports = new Set([candidType]);
            const variableAliasDeclarations = generateVariableAliasDeclarations(
                name,
                candidType,
                useTypeDeclaration
            );
            return {
                candidMeta: {
                    candidTypeAnnotation,
                    candidTypeObject,
                    candidType,
                    imports,
                    variableAliasDeclarations
                }
            };
        });
}

function useVariableAliasDeclarationArb(
    useVariableAliasDeclaration: boolean | undefined
): fc.Arbitrary<boolean> {
    return useVariableAliasDeclaration === undefined
        ? fc.boolean()
        : fc.constant(useVariableAliasDeclaration);
}

function generateVariableAliasDeclarations(
    name: string,
    candidType: string,
    useTypeDeclaration: boolean
): string[] {
    if (useTypeDeclaration) {
        return [`const ${name} = ${candidType};`];
    }
    return [];
}
