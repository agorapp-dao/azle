import { CandidType } from '../../candid';
/**
 * Decodes the provided buffer into the designated JS value.
 *
 * Intended to be a rich replacement for `IDL.decode` from `@dfinity/candid`
 * adding support for complex Azle IDL wrappers such as {@link AzleOpt},
 * {@link AzleVec}, and {@link AzleTuple}. It recursively visits all "inner"
 * values, converting them from their native shape to the shape that Azle expects.
 *
 * @param data the value to decode
 * @param candidType either a built-in IDL data type, or an Azle-defined super-type
 * @returns the Azle representation of the data
 */
export declare function decode(candidType: CandidType | CandidType[], data: ArrayBuffer): any | any[];
