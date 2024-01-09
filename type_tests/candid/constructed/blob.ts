import { blob } from '../../../src/lib';
import {
    AssertType,
    NotAnyAndExact,
    testCandidType,
    testSerializable
} from '../../assert_type';
import { TypeMapping } from '../../../src/lib/candid/type_mapping';

testCandidType(blob);
testSerializable(blob);

export type TestTypeMapping = AssertType<
    NotAnyAndExact<TypeMapping<typeof blob>, Uint8Array>
>;
