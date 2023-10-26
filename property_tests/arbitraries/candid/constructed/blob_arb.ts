import fc from 'fast-check';
import { Candid } from '../';

export const BlobArb = fc
    .tuple(
        fc.uint8Array(),
        fc.oneof(fc.constant('blob'), fc.constant('Vec(nat8)'))
    )
    .map(
        ([value, candidType]): Candid<Uint8Array> => ({
            meta: { candidType },
            value
        })
    );
