"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tuple = exports.AzleTuple = void 0;
const to_idl_1 = require("../../to_idl");
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../serde/encode");
const decode_1 = require("../../serde/decode");
class AzleTuple {
    constructor(t) {
        this.tsType = {};
        this._azleKind = 'AzleTuple';
        this.innerTypes = t;
    }
    toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    getIdl(parents) {
        const idls = this.innerTypes.map((value) => {
            return (0, to_idl_1.toIdl)(value, parents);
        });
        return candid_1.IDL.Tuple(...idls);
    }
}
exports.AzleTuple = AzleTuple;
AzleTuple._azleKind = 'AzleTuple';
function Tuple(...types) {
    return new AzleTuple(types);
}
exports.Tuple = Tuple;
