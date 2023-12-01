import { Principal } from '@dfinity/principal';
import { deepEqual } from 'fast-equals';

import { getActor, Named } from 'azle/property_tests';
import { CandidMeta } from 'azle/property_tests/arbitraries/candid/candid_arb';
import { Test } from 'azle/test';

export function generateTests(
    functionName: string,
    namedParamPrincipals: Named<CandidMeta<Principal>>[],
    returnPrincipal: CandidMeta<Principal>
): Test[] {
    const expectedResult =
        namedParamPrincipals.length > 0
            ? namedParamPrincipals[0].el.agentResponseValue
            : returnPrincipal.agentResponseValue;

    return [
        {
            name: `principal ${functionName}`,
            test: async () => {
                const actor = getActor('./tests/principal/test');
                const result = await actor[functionName](
                    ...namedParamPrincipals.map(
                        (param) => param.el.agentArgumentValue
                    )
                );

                return { Ok: deepEqual(result, expectedResult) };
            }
        }
    ];
}
