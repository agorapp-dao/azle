"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.id = void 0;
const principal_1 = require("../candid/types/reference/principal");
/**
 * Gets the id of this canister
 * @returns the canister id
 */
function id() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    // TODO consider bytes instead of string, just like with caller
    const idString = globalThis._azleIc.id();
    return principal_1.Principal.fromText(idString);
}
exports.id = id;
