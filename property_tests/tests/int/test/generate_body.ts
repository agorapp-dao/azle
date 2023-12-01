import { CandidMeta } from 'azle/property_tests/arbitraries/candid/candid_arb';
import { Named } from 'azle/property_tests';
import { areParamsCorrectlyOrdered } from 'azle/property_tests/are_params_correctly_ordered';

export function generateBody(
    namedParamInts: Named<CandidMeta<bigint>>[],
    returnInt: CandidMeta<bigint>
): string {
    const paramsAreBigInts = namedParamInts
        .map((param) => {
            return `if (typeof ${param.name} !== 'bigint') throw new Error('${param.name} must be a bigint');`;
        })
        .join('\n');

    const sum = namedParamInts.reduce((acc, { name }) => {
        return `${acc} + ${name}`;
    }, returnInt.src.valueLiteral);

    const paramsCorrectlyOrdered = areParamsCorrectlyOrdered(namedParamInts);

    return `
        ${paramsAreBigInts}

        ${paramsCorrectlyOrdered}

        return ${sum};
    `;
}
