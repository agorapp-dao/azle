import fc from 'fast-check';
import { Candid } from '..';

export const BoolArb = fc.boolean().map(
    (value): Candid<boolean> => ({
        value,
        meta: { candidType: 'bool', import: new Set(['bool']) }
    })
);
