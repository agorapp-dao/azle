import { CandidType } from '../../candid';
/**
 * Encodes the provided value as candid blob of the designated type.
 *
 * Intended to be a rich replacement for `IDL.encode` from `@dfinity/candid`,
 * adding support for complex Azle IDL wrappers such as {@link AzleOpt},
 * {@link AzleVec}, and {@link AzleTuple}. It recursively visits all "inner"
 * values, converting any Azle values to official IDL values.
 *
 * @param data the value to encode
 * @param candidType either a built-in IDL data type, or an Azle-defined super-type
 * @returns candid bytes
 */
export declare function encode(candidType: CandidType | CandidType[], data: any | any[]): Uint8Array;
