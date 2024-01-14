"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canisterBalance128 = void 0;
const nat_1 = require("../candid/types/primitive/nats/nat");
const decode_1 = require("../candid/serde/decode");
/**
 * Gets the amount of funds available in the canister
 * @returns the number of cycles in the canister
 */
function canisterBalance128() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const canisterBalance128CandidBytes = globalThis._azleIc.canisterBalance128();
    return (0, decode_1.decode)(nat_1.nat, canisterBalance128CandidBytes);
}
exports.canisterBalance128 = canisterBalance128;
