"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgCyclesAccept = void 0;
const nat64_1 = require("../candid/types/primitive/nats/nat64");
const decode_1 = require("../candid/serde/decode");
const encode_1 = require("../candid/serde/encode");
/**
 * Moves cycles from the call to the canister balance
 * @param maxAmount the max amount of cycles to move
 * @returns the actual amount moved
 */
function msgCyclesAccept(maxAmount) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const maxAmountCandidBytes = (0, encode_1.encode)(nat64_1.nat64, maxAmount).buffer;
    const msgCyclesAcceptCandidBytes = globalThis._azleIc.msgCyclesAccept(maxAmountCandidBytes);
    return (0, decode_1.decode)(nat64_1.nat64, msgCyclesAcceptCandidBytes);
}
exports.msgCyclesAccept = msgCyclesAccept;
