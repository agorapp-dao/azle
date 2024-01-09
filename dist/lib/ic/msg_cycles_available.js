"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgCyclesAvailable = void 0;
const nat64_1 = require("../candid/types/primitive/nats/nat64");
const decode_1 = require("../candid/serde/decode");
/**
 * Returns the amount of cycles that were transferred by the caller of the
 * current call, and is still available in this message
 * @returns the amount of cycles
 */
function msgCyclesAvailable() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const msgCyclesAvailableCandidBytes = globalThis._azleIc.msgCyclesAvailable();
    return (0, decode_1.decode)(nat64_1.nat64, msgCyclesAvailableCandidBytes);
}
exports.msgCyclesAvailable = msgCyclesAvailable;
