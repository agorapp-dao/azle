"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptMessage = void 0;
/**
 * Accepts the ingress message. Calling from outside the
 * {@link $inspectMessage} context will cause the canister to trap.
 */
function acceptMessage() {
    return globalThis._azleIc ? globalThis._azleIc.acceptMessage() : undefined;
}
exports.acceptMessage = acceptMessage;
