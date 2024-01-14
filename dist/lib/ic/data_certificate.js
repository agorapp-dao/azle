"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataCertificate = void 0;
const opt_1 = require("../candid/types/constructed/opt");
/**
 * When called from a query call, returns the data certificate
 * authenticating `certifiedData` set by this canister. Otherwise returns
 * `None`.
 * @returns the data certificate or None
 */
function dataCertificate() {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    const rawRustValue = globalThis._azleIc.dataCertificate();
    return rawRustValue === undefined
        ? opt_1.None
        : (0, opt_1.Some)(new Uint8Array(rawRustValue));
}
exports.dataCertificate = dataCertificate;
