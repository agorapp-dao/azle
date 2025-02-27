import { CandidValueAndMeta } from 'azle/property_tests/arbitraries/candid/candid_value_and_meta_arb';
import { Named } from 'azle/property_tests';
import { areParamsCorrectlyOrdered } from 'azle/property_tests/are_params_correctly_ordered';

export function generateBody(
    namedParamNat32s: Named<CandidValueAndMeta<number>>[],
    returnNat32: CandidValueAndMeta<number>
): string {
    const paramsAreNumbers = namedParamNat32s
        .map((param) => {
            return `if (typeof ${param.name} !== 'number') throw new Error('${param.name} must be a number');`;
        })
        .join('\n');

    const sum = namedParamNat32s.reduce((acc, { name }) => {
        return `${acc} + ${name}`;
    }, returnNat32.src.valueLiteral);
    const count = namedParamNat32s.length + 1;
    const average = `Math.floor((${sum}) / ${count})`;

    const paramsCorrectlyOrdered = areParamsCorrectlyOrdered(namedParamNat32s);

    return `
        ${paramsAreNumbers}

        ${paramsCorrectlyOrdered}

        return ${average};
    `;
}
