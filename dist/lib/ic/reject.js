"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reject = void 0;
/**
 * Rejects the current call with the provided message
 * @param message the rejection message
 */
function reject(message) {
    return globalThis._azleIc ? globalThis._azleIc.reject(message) : undefined;
}
exports.reject = reject;
