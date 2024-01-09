"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = void 0;
const candid_1 = require("@dfinity/candid");
const encode_visitor_1 = require("./visitors/encode_visitor");
const candid_2 = require("../../candid");
/**
 * Encodes the provided value as candid blob of the designated type.
 *
 * Intended to be a rich replacement for `IDL.encode` from `@dfinity/candid`,
 * adding support for complex Azle IDL wrappers such as {@link AzleOpt},
 * {@link AzleVec}, and {@link AzleTuple}. It recursively visits all "inner"
 * values, converting any Azle values to official IDL values.
 *
 * @param data the value to encode
 * @param candidType either a built-in IDL data type, or an Azle-defined super-type
 * @returns candid bytes
 */
function encode(candidType, data) {
    if (Array.isArray(candidType)) {
        if (Array.isArray(data)) {
            return encodeMultiple(candidType, data);
        }
        throw new Error('If multiple candid types are given then multiple data entries are expected.');
    }
    return encodeSingle(candidType, data);
}
exports.encode = encode;
function encodeSingle(candidType, data) {
    const idl = (0, candid_2.toIdl)(candidType);
    const idlIsAzleVoid = Array.isArray(idl);
    if (idlIsAzleVoid) {
        return new Uint8Array(candid_1.IDL.encode([], []));
    }
    const encodeReadyKey = idl.accept(new encode_visitor_1.EncodeVisitor(), {
        candidType: candidType,
        js_data: data
    });
    return new Uint8Array(candid_1.IDL.encode([idl], [encodeReadyKey]));
}
function encodeMultiple(candidTypes, data) {
    const idls = (0, candid_2.toIdlArray)(candidTypes);
    const values = data.map((datum, index) => idls[index].accept(new encode_visitor_1.EncodeVisitor(), {
        candidType: candidTypes[index],
        js_data: datum
    }));
    return new Uint8Array(candid_1.IDL.encode(idls, values));
}
