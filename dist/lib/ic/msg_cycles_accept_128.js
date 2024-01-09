"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgCyclesAccept128 = void 0;
const nat_1 = require("../candid/types/primitive/nats/nat");
const decode_1 = require("../candid/serde/decode");
const encode_1 = require("../candid/serde/encode");
/**
 * Moves cycles from the call to the canister balance
 * @param maxAmount the max amount of cycles to move
 * @returns the actual amount moved
 */
function msgCyclesAccept128(maxAmount) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const maxAmountCandidBytes = (0, encode_1.encode)(nat_1.nat, maxAmount).buffer;
    const msgCyclesAccept128CandidBytes = globalThis._azleIc.msgCyclesAccept128(maxAmountCandidBytes);
    return (0, decode_1.decode)(nat_1.nat, msgCyclesAccept128CandidBytes);
}
exports.msgCyclesAccept128 = msgCyclesAccept128;
