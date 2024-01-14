"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nat64 = exports.AzleNat64 = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../../serde/encode");
const decode_1 = require("../../../serde/decode");
class AzleNat64 {
    constructor() {
        this._azleKind = 'AzleNat64';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Nat64;
    }
}
exports.AzleNat64 = AzleNat64;
AzleNat64._azleKind = 'AzleNat64';
exports.nat64 = AzleNat64;
