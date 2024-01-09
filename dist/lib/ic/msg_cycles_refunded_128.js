"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgCyclesRefunded128 = void 0;
const nat_1 = require("../candid/types/primitive/nats/nat");
const decode_1 = require("../candid/serde/decode");
/**
 * Returns the amount of cycles that came back with the response as a refund.
 * The refund has already been added to the canister balance automatically.
 * @returns the amount of cycles
 */
function msgCyclesRefunded128() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const msgCyclesRefunded128CandidBytes = globalThis._azleIc.msgCyclesRefunded128();
    return (0, decode_1.decode)(nat_1.nat, msgCyclesRefunded128CandidBytes);
}
exports.msgCyclesRefunded128 = msgCyclesRefunded128;
