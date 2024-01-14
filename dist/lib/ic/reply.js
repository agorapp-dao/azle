"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reply = void 0;
const encode_1 = require("../candid/serde/encode");
/**
 * Used to manually reply to an ingress message. Intended to be used in
 * canister methods with a {@link Manual} return type.
 * @param reply the value with which to reply. Must by of type `T` where `T`
 * is the generic type supplied to `Manual<T>`. Otherwise will result in an
 * uncaught `TypeError`.
 */
function reply(data, type) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    return globalThis._azleIc.replyRaw((0, encode_1.encode)(type, data).buffer);
}
exports.reply = reply;
