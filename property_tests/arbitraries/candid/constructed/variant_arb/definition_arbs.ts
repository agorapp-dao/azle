import fc from 'fast-check';
import { UniqueIdentifierArb } from '../../../unique_identifier_arb';
import {
    CandidDefinition,
    RecCandidDefMemo,
    RecursiveCandidDefinition,
    VariantCandidDefinition
} from '../../candid_definition_arb/types';
import { JsFunctionNameArb } from '../../../js_function_name_arb';

type Field = [string, CandidDefinition];

// For simplicity we will only allow recursive options to show up in the second
// or greater field. That way will will be guaranteed to have at least one base
// case in every variant.
function possiblyRecursiveArb(
    candidArb: RecCandidDefMemo,
    index: number,
    parents: RecursiveCandidDefinition[],
    n: number
): fc.Arbitrary<CandidDefinition> {
    return fc.nat(Math.max(parents.length - 1, 0)).chain((randomIndex) => {
        if (parents.length === 0 || index < 1) {
            // If there are no recursive parents or this is the first variant field just do a regular arb field
            return candidArb(parents)(n);
        }
        return fc.oneof(
            { arbitrary: fc.constant(parents[randomIndex]), weight: 1 },
            { arbitrary: candidArb(parents)(n), weight: 1 }
        );
    });
}

export function VariantDefinitionArb(
    candidTypeArbForFields: RecCandidDefMemo,
    parents: RecursiveCandidDefinition[],
    n: number
): fc.Arbitrary<VariantCandidDefinition> {
    return fc
        .tuple(
            UniqueIdentifierArb('typeDeclaration'),
            VariantFieldsArb(candidTypeArbForFields, parents, n),
            fc.boolean()
        )
        .map(([name, fields, useTypeDeclaration]): VariantCandidDefinition => {
            const candidTypeAnnotation = generateCandidTypeAnnotation(
                useTypeDeclaration,
                name,
                fields
            );

            const candidTypeObject = generateCandidTypeObject(
                useTypeDeclaration,
                name,
                fields
            );

            const variableAliasDeclarations = generateVariableAliasDeclarations(
                useTypeDeclaration,
                name,
                fields
            );

            const imports = generateImports(fields);

            return {
                candidMeta: {
                    candidTypeAnnotation,
                    candidTypeObject,
                    variableAliasDeclarations,
                    imports,
                    candidType: 'Variant'
                },
                innerTypes: fields
            };
        });
}

function VariantFieldsArb(
    candidTypeArb: RecCandidDefMemo,
    parents: RecursiveCandidDefinition[],
    n: number
): fc.Arbitrary<Field[]> {
    // Although no minLength is technically required (according to the
    // spec), the DFX CLI itself currently errors out trying to pass
    // an empty object.
    const VARIANT_MIN_FIELD_COUNT = 1;
    return fc
        .uniqueArray(JsFunctionNameArb, {
            minLength: VARIANT_MIN_FIELD_COUNT
        })
        .chain((fieldsNames) =>
            fc.tuple(
                ...fieldsNames.map((name, index) =>
                    fc.tuple(
                        fc.constant(name),
                        possiblyRecursiveArb(candidTypeArb, index, parents, n)
                    )
                )
            )
        );
}

function generateImports(fields: Field[]): Set<string> {
    const fieldImports = fields.flatMap((field) => [
        ...field[1].candidMeta.imports
    ]);
    return new Set([...fieldImports, 'RequireExactlyOne', 'Variant']);
}

function generateVariableAliasDeclarations(
    useTypeDeclaration: boolean,
    name: string,
    fields: Field[]
): string[] {
    const fieldTypeDeclarations = fields.flatMap(
        (field) => field[1].candidMeta.variableAliasDeclarations
    );
    if (useTypeDeclaration) {
        return [
            ...fieldTypeDeclarations,
            `const ${name} = ${generateCandidTypeObject(false, name, fields)};`
        ];
    }
    return fieldTypeDeclarations;
}

function generateCandidTypeAnnotation(
    useTypeDeclaration: boolean,
    name: string,
    fields: Field[]
): string {
    if (useTypeDeclaration === true) {
        return `typeof ${name}.tsType`;
    }

    return `RequireExactlyOne<{${fields
        .map(
            ([fieldName, fieldDataType]) =>
                `${fieldName}: ${fieldDataType.candidMeta.candidTypeAnnotation}`
        )
        .join(',')}}>`;
}

function generateCandidTypeObject(
    useTypeDeclaration: boolean,
    name: string,
    fields: Field[]
): string {
    if (useTypeDeclaration === true) {
        return name;
    }

    return `Variant({${fields
        .map(
            ([fieldName, fieldDataType]) =>
                `${fieldName}: ${fieldDataType.candidMeta.candidTypeObject}`
        )
        .join(',')}})`;
}
