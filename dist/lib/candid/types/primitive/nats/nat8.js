"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nat8 = exports.AzleNat8 = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../../serde/encode");
const decode_1 = require("../../../serde/decode");
class AzleNat8 {
    constructor() {
        this._azleKind = 'AzleNat8';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Nat8;
    }
}
exports.AzleNat8 = AzleNat8;
AzleNat8._azleKind = 'AzleNat8';
exports.nat8 = AzleNat8;
