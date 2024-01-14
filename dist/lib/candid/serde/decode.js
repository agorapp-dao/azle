"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = void 0;
const candid_1 = require("@dfinity/candid");
const decode_visitor_1 = require("./visitors/decode_visitor");
const candid_2 = require("../../candid");
/**
 * Decodes the provided buffer into the designated JS value.
 *
 * Intended to be a rich replacement for `IDL.decode` from `@dfinity/candid`
 * adding support for complex Azle IDL wrappers such as {@link AzleOpt},
 * {@link AzleVec}, and {@link AzleTuple}. It recursively visits all "inner"
 * values, converting them from their native shape to the shape that Azle expects.
 *
 * @param data the value to decode
 * @param candidType either a built-in IDL data type, or an Azle-defined super-type
 * @returns the Azle representation of the data
 */
function decode(candidType, data) {
    if (Array.isArray(candidType)) {
        return decodeMultiple(candidType, data);
    }
    return decodeSingle(candidType, data);
}
exports.decode = decode;
function decodeSingle(candidType, data) {
    // TODO: there is a discrepancy between CandidType and CandidClass that
    // needs to be aligned so that this isn't an error. Both are representing
    // candid IDLs, either from the @dfinity/candid library or the
    // Azle-augmented ones
    const idl = (0, candid_2.toIdl)(candidType);
    const idlIsAzleVoid = Array.isArray(idl);
    if (idlIsAzleVoid) {
        return undefined;
    }
    const candidDecodedValue = candid_1.IDL.decode([idl], data)[0];
    return idl.accept(new decode_visitor_1.DecodeVisitor(), {
        candidType: candidType,
        js_data: candidDecodedValue
    });
}
function decodeMultiple(candidTypes, data) {
    const idls = (0, candid_2.toIdlArray)(candidTypes);
    const decoded = candid_1.IDL.decode(idls, data);
    return idls.map((idl, index) => idl.accept(new decode_visitor_1.DecodeVisitor(), {
        candidType: candidTypes[index],
        js_data: decoded[index]
    }));
}
