"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCertifiedData = void 0;
const blob_1 = require("../candid/types/constructed/blob");
const encode_1 = require("../candid/serde/encode");
/**
 * Sets the certified data of this canister.
 *
 * Canisters can store up to 32 bytes of data that is certified by the
 * system on a regular basis. One can call {@link ic.dataCertificate} from a
 * {@link $query} call to get a certificate authenticating the value set by
 * calling this function.

 * This function can only be called from the following contexts:
 *
 * - {@link $init}, {@link $preUpgrade} and {@link $postUpgrade} hooks
 * - {@link $update} calls
 * - reply or reject callbacks
 *
 * This function traps if:
 *
 * - `data.length` > 32
 * - called from an illegal context (e.g. from a {@link $query} call)
 *
 * @param data the data to be set
 * @returns
 */
function setCertifiedData(data) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const dataBytes = (0, encode_1.encode)(blob_1.blob, data).buffer;
    return globalThis._azleIc.setCertifiedData(dataBytes);
}
exports.setCertifiedData = setCertifiedData;
