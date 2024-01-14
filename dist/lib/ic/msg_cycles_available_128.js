"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgCyclesAvailable128 = void 0;
const nat_1 = require("../candid/types/primitive/nats/nat");
const decode_1 = require("../candid/serde/decode");
/**
 * Returns the amount of cycles that were transferred by the caller of the
 * current call, and is still available in this message
 * @returns the amount of cycles
 */
function msgCyclesAvailable128() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const msgCyclesAvailable128CandidBytes = globalThis._azleIc.msgCyclesAvailable128();
    return (0, decode_1.decode)(nat_1.nat, msgCyclesAvailable128CandidBytes);
}
exports.msgCyclesAvailable128 = msgCyclesAvailable128;
