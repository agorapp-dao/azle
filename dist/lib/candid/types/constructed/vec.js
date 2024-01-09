"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vec = exports.AzleVec = void 0;
const to_idl_1 = require("../../to_idl");
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../serde/encode");
const decode_1 = require("../../serde/decode");
class AzleVec {
    constructor(t) {
        this.tsType = {};
        this._azleKind = 'AzleVec';
        this.innerType = t;
    }
    toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    getIdl(parents) {
        return candid_1.IDL.Vec((0, to_idl_1.toIdl)(this.innerType, parents));
    }
}
exports.AzleVec = AzleVec;
AzleVec._azleKind = 'AzleVec';
function Vec(t) {
    return new AzleVec(t);
}
exports.Vec = Vec;
