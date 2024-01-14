"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callRaw = void 0;
const nat64_1 = require("../candid/types/primitive/nats/nat64");
const uuid_1 = require("uuid");
const encode_1 = require("../candid/serde/encode");
/**
 * Performs an asynchronous call to another canister using the [System API](
 * https://internetcomputer.org/docs/current/references/ic-interface-spec/#system-api-call)
 * and returns the payload without serialization
 * @param canisterId the principal of the canister to call
 * @param method the method to call
 * @param argsRaw the args to pass to the canister method
 * @param payment the number of cycles to send with the call
 * @returns
 */
function callRaw(canisterId, method, argsRaw, payment) {
    if (globalThis._azleIc === undefined) {
        return undefined;
    }
    // TODO this should use a Result remember
    return new Promise((resolve, reject) => {
        if (globalThis._azleIc === undefined) {
            return undefined;
        }
        const promiseId = (0, uuid_1.v4)();
        const globalResolveId = `_resolve_${promiseId}`;
        const globalRejectId = `_reject_${promiseId}`;
        // TODO perhaps we should be more robust
        // TODO for example, we can keep the time with these
        // TODO if they are over a certain amount old we can delete them
        globalThis._azleResolveIds[globalResolveId] = (bytes) => {
            resolve(new Uint8Array(bytes));
            delete globalThis._azleResolveIds[globalResolveId];
            delete globalThis._azleRejectIds[globalRejectId];
        };
        globalThis._azleRejectIds[globalRejectId] = (error) => {
            reject(error);
            delete globalThis._azleResolveIds[globalResolveId];
            delete globalThis._azleRejectIds[globalRejectId];
        };
        const canisterIdBytes = canisterId.toUint8Array().buffer;
        const argsRawBuffer = argsRaw.buffer;
        const paymentCandidBytes = (0, encode_1.encode)(nat64_1.nat64, payment).buffer;
        // TODO consider finally, what if deletion goes wrong
        try {
            globalThis._azleIc.callRaw(promiseId, canisterIdBytes, method, argsRawBuffer, paymentCandidBytes);
        }
        catch (error) {
            delete globalThis._azleResolveIds[globalResolveId];
            delete globalThis._azleRejectIds[globalRejectId];
            throw error;
        }
    });
}
exports.callRaw = callRaw;
