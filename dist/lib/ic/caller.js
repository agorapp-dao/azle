"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caller = void 0;
const principal_1 = require("../candid/types/reference/principal");
/**
 * Returns the caller of the current call
 * @returns the caller of the current call
 */
function caller() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const callerBytes = globalThis._azleIc.caller();
    return principal_1.Principal.fromUint8Array(new Uint8Array(callerBytes));
}
exports.caller = caller;
