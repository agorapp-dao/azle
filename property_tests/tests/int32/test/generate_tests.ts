import { deepEqual } from 'fast-equals';

import { getActor } from 'azle/property_tests';
import { CandidMeta } from 'azle/property_tests/arbitraries/candid/candid_arb';
import { Named } from 'azle/property_tests/arbitraries/query_method_arb';
import { Test } from 'azle/test';

export function generateTests(
    functionName: string,
    namedParamInt32s: Named<CandidMeta<number>>[],
    returnInt32: CandidMeta<number>
): Test[] {
    const count = namedParamInt32s.length + 1;
    const expectedResult = Math.floor(
        namedParamInt32s.reduce(
            (acc, param) => acc + param.el.agentResponseValue,
            returnInt32.agentResponseValue
        ) / count
    );
    const paramValues = namedParamInt32s.map(
        (param) => param.el.agentArgumentValue
    );

    return [
        {
            name: `int32 ${functionName}`,
            test: async () => {
                const actor = getActor('./tests/int32/test');

                const result = await actor[functionName](...paramValues);

                return {
                    Ok: deepEqual(result, expectedResult)
                };
            }
        }
    ];
}
