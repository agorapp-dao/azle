"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nat = exports.AzleNat = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../../serde/encode");
const decode_1 = require("../../../serde/decode");
class AzleNat {
    constructor() {
        this._azleKind = 'AzleNat';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Nat;
    }
}
exports.AzleNat = AzleNat;
AzleNat._azleKind = 'AzleNat';
exports.nat = AzleNat;
