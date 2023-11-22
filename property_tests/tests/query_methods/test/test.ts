import fc from 'fast-check';

import { runPropTests } from 'azle/property_tests';
import { CandidTypeArb } from 'azle/property_tests/arbitraries/candid/candid_type_arb';
import { CandidReturnTypeArb } from 'azle/property_tests/arbitraries/candid/candid_return_type_arb';
import { CanisterArb } from 'azle/property_tests/arbitraries/canister_arb';
import { QueryMethodArb } from 'azle/property_tests/arbitraries/query_method_arb';
import { firstParamOrDefault as generateParamAndReturnArbs } from 'azle/property_tests/first_param_or_default';

import { generateBody } from './generate_body';
import { generateTests } from './generate_tests';

// TODO Canister
// TODO Record
// TODO text
// TODO nat
// TODO update methods

const HeterogeneousQueryMethod = QueryMethodArb(
    ...generateParamAndReturnArbs(CandidTypeArb, CandidReturnTypeArb),
    {
        generateBody,
        generateTests
    }
);

runPropTests(CanisterArb(HeterogeneousQueryMethod));
