"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectCode = void 0;
/**
 * Returns the rejection code from the most recently executed cross-canister
 * call
 * @returns the rejection code
 */
function rejectCode() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const rejectCodeNumber = globalThis._azleIc.rejectCode();
    switch (rejectCodeNumber) {
        case 0:
            return { NoError: null };
        case 1:
            return { SysFatal: null };
        case 2:
            return { SysTransient: null };
        case 3:
            return { DestinationInvalid: null };
        case 4:
            return { CanisterReject: null };
        case 5:
            return { CanisterError: null };
        case 6:
            return { Unknown: null };
        default:
            throw Error(`Unknown rejection code: ${rejectCodeNumber}`);
    }
}
exports.rejectCode = rejectCode;
