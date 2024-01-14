"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzleOpt = exports.Opt = exports.None = exports.Some = void 0;
const decode_1 = require("../../serde/decode");
const encode_1 = require("../../serde/encode");
const to_idl_1 = require("../../to_idl");
const candid_1 = require("@dfinity/candid");
/**
 * Wraps the provided value in a `Some` {@link Opt}
 * @param value - the value to be wrapped
 * @returns a `Some` {@link Opt} containing the provided value
 */
function Some(value) {
    return { Some: value };
}
exports.Some = Some;
/** An {@link Opt} representing the absence of a value */
exports.None = { None: null };
// TODO what happens if we pass something to Opt() that can't be converted to CandidClass?
function Opt(t) {
    return new AzleOpt(t);
}
exports.Opt = Opt;
class AzleOpt {
    constructor(t) {
        this.tsType = {};
        this._azleKind = 'AzleOpt';
        this.innerType = t;
    }
    toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    getIdl(parents) {
        return candid_1.IDL.Opt((0, to_idl_1.toIdl)(this.innerType, parents));
    }
}
exports.AzleOpt = AzleOpt;
AzleOpt._azleKind = 'AzleOpt';
