import { RejectionCode } from '../system_types';
/**
 * Returns the rejection code from the most recently executed cross-canister
 * call
 * @returns the rejection code
 */
export declare function rejectCode(): RejectionCode;
