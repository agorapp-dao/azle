import { runTests } from 'azle/test';
import { createActor } from '../test/dfx_generated/simple_erc20';
import { getTests } from './tests';

const simpleErc20Canister = createActor('rrkah-fqaaa-aaaaa-aaaaq-cai', {
    agentOptions: {
        host: 'http://127.0.0.1:8000'
    }
});

runTests(getTests(simpleErc20Canister));
