"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methodName = void 0;
/**
 * Returns the name of the current canister methods
 * @returns the current canister method
 */
function methodName() {
    return globalThis._azleIc
        ? globalThis._azleIc.methodName()
        : undefined;
}
exports.methodName = methodName;
