"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgCyclesRefunded = void 0;
const nat64_1 = require("../candid/types/primitive/nats/nat64");
const decode_1 = require("../candid/serde/decode");
/**
 * Returns the amount of cycles that came back with the response as a refund.
 * The refund has already been added to the canister balance automatically.
 * @returns the amount of cycles
 */
function msgCyclesRefunded() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const msgCyclesRefundedCandidBytes = globalThis._azleIc.msgCyclesRefunded();
    return (0, decode_1.decode)(nat64_1.nat64, msgCyclesRefundedCandidBytes);
}
exports.msgCyclesRefunded = msgCyclesRefunded;
