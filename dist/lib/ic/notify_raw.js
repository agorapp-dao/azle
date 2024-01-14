"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifyRaw = void 0;
const nat_1 = require("../candid/types/primitive/nats/nat");
const encode_1 = require("../candid/serde/encode");
/**
 * Like notify, but sends the argument as raw bytes, skipping Candid serialization.
 * @param canisterId
 * @param method
 * @param argsRaw
 * @param payment
 * @returns
 */
function notifyRaw(canisterId, method, argsRaw, payment) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const canisterIdBytes = canisterId.toUint8Array().buffer;
    const argsRawBuffer = argsRaw.buffer;
    const paymentCandidBytes = (0, encode_1.encode)(nat_1.nat, payment).buffer;
    return globalThis._azleIc.notifyRaw(canisterIdBytes, method, argsRawBuffer, paymentCandidBytes);
}
exports.notifyRaw = notifyRaw;
