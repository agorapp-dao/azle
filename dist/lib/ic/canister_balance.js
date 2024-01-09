"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canisterBalance = void 0;
const nat64_1 = require("../candid/types/primitive/nats/nat64");
const decode_1 = require("../candid/serde/decode");
/**
 * Gets the amount of funds available in the canister
 * @returns the number of cycles in the canister
 */
function canisterBalance() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const canisterBalanceCandidBytes = globalThis._azleIc.canisterBalance();
    return (0, decode_1.decode)(nat64_1.nat64, canisterBalanceCandidBytes);
}
exports.canisterBalance = canisterBalance;
