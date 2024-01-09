"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blob = exports.AzleBlob = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../serde/encode");
const decode_1 = require("../../serde/decode");
class AzleBlob {
    constructor() {
        this._azleKind = 'AzleBlob';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Vec(candid_1.IDL.Nat8);
    }
}
exports.AzleBlob = AzleBlob;
AzleBlob._azleKind = 'AzleBlob';
exports.blob = AzleBlob;
