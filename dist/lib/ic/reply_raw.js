"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyRaw = void 0;
/**
 * Used to manually reply to an ingress message. Intended to be used in
 * canister methods with a {@link Manual} return type.
 * @param buf the value with which to reply. Intended to be used in conjunction with
 * {@link ic.candidEncode}.
 * @example
 * ```ts
 * $update;
 * export function replyRaw(): Manual<RawReply> {
 *     ic.replyRaw(
 *         ic.candidEncode(
 *             '(record { "int" = 42; "text" = "text"; "bool" = true; "blob" = blob "raw bytes"; "variant" = variant { Medium } })'
 *         )
 *     );
 * }
 * ```
 */
function replyRaw(replyBuffer) {
    return globalThis._azleIc
        ? globalThis._azleIc.replyRaw(replyBuffer.buffer)
        : undefined;
}
exports.replyRaw = replyRaw;
