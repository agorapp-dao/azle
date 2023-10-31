import fc from 'fast-check';
import { Candid, CandidTypeArb } from '../../candid';
import { UniqueIdentifierArb } from '../../unique_identifier_arb';
import { JsFunctionNameArb } from '../../js_function_name_arb';

export type Variant = {
    [x: string]: number | bigint | null;
};
export type VariantFieldType = number | bigint | null;

export const VariantArb = fc
    .tuple(
        UniqueIdentifierArb('typeDeclaration'),
        fc.uniqueArray(fc.tuple(JsFunctionNameArb, CandidTypeArb), {
            selector: (entry) => entry[0],
            minLength: 1
            // Although no minLength is technically required (according to the
            // spec), the DFX CLI itself currently errors out trying to pass
            // an empty object.
        })
    )
    .map(([name, fields]): Candid<Variant> => {
        const randomIndex = Math.floor(Math.random() * fields.length);

        const typeDeclaration = `const ${name} = Variant({\n    ${fields
            .map(
                ([fieldName, fieldDataType]) =>
                    `${fieldName}: ${fieldDataType.src.candidType}`
            )
            .join(',\n    ')}\n});`;

        const value = generateValue(randomIndex, fields);

        const imports = new Set([
            ...fields.map((field) => field[1].src.candidType),
            'Variant'
        ]);

        const valueLiteral = generateValueLiteral(randomIndex, fields);
        const equals = generateEqualsMethod(fields);

        return {
            src: {
                candidType: name,
                typeDeclaration,
                imports,
                valueLiteral
            },
            value,
            equals
        };
    });

type Field = [string, Candid<VariantFieldType>];

function generateValue(index: number, fields: Field[]) {
    return fields.length === 0
        ? {}
        : (() => {
              const [randomFieldName, { value: randomFieldDataType }] =
                  fields[index];

              return {
                  [randomFieldName]: randomFieldDataType
              };
          })();
}

function generateValueLiteral(index: number, fields: Field[]): string {
    if (fields.length === 0) {
        return '{}';
    }

    const [fieldName, field] = fields[index];

    return `{
        ${fieldName}: ${field.src.valueLiteral}
    }`;
}

function generateEqualsMethod(
    fields: Field[]
): (a: Variant, b: Variant) => boolean {
    return (a: Variant, b: Variant): boolean => {
        if (typeof a !== typeof b) {
            return false;
        }

        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length && aKeys.length !== 1) {
            return false;
        }
        const aFieldName = aKeys[0];
        const bFieldName = bKeys[0];
        if (aFieldName !== bFieldName) {
            return false;
        }

        return fields.reduce((acc, [fieldName, fieldCandidType]) => {
            if (fieldName !== aFieldName) {
                return acc || false;
            }
            return fieldCandidType.equals(a[fieldName], b[fieldName]);
        }, false);
    };
}
