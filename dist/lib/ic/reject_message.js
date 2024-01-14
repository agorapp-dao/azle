"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectMessage = void 0;
/**
 * Returns the rejection message from the most recently executed
 * cross-canister call
 *
 * **Warning**: Traps if there is no reject message. It is recommended to
 * check {@link ic.rejectCode} first.
 *
 * @returns the rejection message
 */
function rejectMessage() {
    return globalThis._azleIc
        ? globalThis._azleIc.rejectMessage()
        : undefined;
}
exports.rejectMessage = rejectMessage;
