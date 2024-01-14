"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isController = void 0;
/** Determine if a {@link Principal} is a controller of the canister. */
function isController(principal) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    return globalThis._azleIc.isController(principal.toUint8Array().buffer);
}
exports.isController = isController;
