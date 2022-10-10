import { Test } from 'azle/test';
import { _SERVICE } from '../dfx_generated/azle/azle.did';
import { ActorSubclass } from '@dfinity/agent';

const HELLO_BYTES = [104, 101, 108, 108, 111];
const WORLD_BYTES = [119, 111, 114, 108, 100];

export function get_tests(blob_canister: ActorSubclass<_SERVICE>): Test[] {
    return [
        {
            name: 'get blob',
            test: async () => {
                const result = await blob_canister.get_blob();
                return {
                    ok: blob_equals(result, HELLO_BYTES)
                };
            }
        },
        {
            name: 'get blobs',
            test: async () => {
                const result = await blob_canister.get_blobs();
                return {
                    ok: blob_array_equals(result, [HELLO_BYTES, WORLD_BYTES])
                };
            }
        }
    ];
}

function blob_array_equals(blob_array: number[][], other: number[][]) {
    return (
        blob_array.length === other.length &&
        blob_array.every((item, index) => blob_equals(item, other[index]))
    );
}

function blob_equals(blob: number[], other: number[]) {
    return (
        blob.length === other.length &&
        blob.every((item, index) => item === other[index])
    );
}
