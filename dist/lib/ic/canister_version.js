"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canisterVersion = void 0;
const nat64_1 = require("../candid/types/primitive/nats/nat64");
const decode_1 = require("../candid/serde/decode");
/**
 * Returns the canister version number
 *
 * @returns the version number
 */
function canisterVersion() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const canisterVersionCandidBytes = globalThis._azleIc.canisterVersion();
    return (0, decode_1.decode)(nat64_1.nat64, canisterVersionCandidBytes);
}
exports.canisterVersion = canisterVersion;
