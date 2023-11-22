import fc from 'fast-check';

import { runPropTests } from 'azle/property_tests';
import { ServiceArb } from 'azle/property_tests/arbitraries/candid/reference/service_arb';
import { CanisterArb } from 'azle/property_tests/arbitraries/canister_arb';
import { QueryMethodArb } from 'azle/property_tests/arbitraries/query_method_arb';

import { generateBody } from './generate_body';
import { generateTests } from './generate_tests';

const UniqueServicesArray = fc.uniqueArray(ServiceArb, {
    selector: (entry) => entry.src.candidType
});

const AllServicesQueryMethod = QueryMethodArb(UniqueServicesArray, ServiceArb, {
    generateBody,
    generateTests
});

runPropTests(CanisterArb(AllServicesQueryMethod));
