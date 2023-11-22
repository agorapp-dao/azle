import { deepEqual } from 'fast-equals';

import { getActor } from 'azle/property_tests';
import { CandidMeta } from 'azle/property_tests/arbitraries/candid/candid_arb';
import { Named } from 'azle/property_tests/arbitraries/query_method_arb';
import { Test } from 'azle/test';

export function generateTests(
    functionName: string,
    namedParamFloat64s: Named<CandidMeta<number>>[],
    returnFloat64: CandidMeta<number>
): Test[] {
    const count = namedParamFloat64s.length + 1;
    const expectedResult =
        namedParamFloat64s.reduce(
            (acc, param) => acc + param.el.agentResponseValue,
            returnFloat64.agentResponseValue
        ) / count;

    const paramValues = namedParamFloat64s.map(
        (param) => param.el.agentArgumentValue
    );

    return [
        {
            name: `float64 ${functionName}`,
            test: async () => {
                const actor = getActor('./tests/float64/test');

                const result = await actor[functionName](...paramValues);

                return {
                    Ok: deepEqual(result, expectedResult)
                };
            }
        }
    ];
}
