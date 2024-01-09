"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nat16 = exports.AzleNat16 = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../../serde/encode");
const decode_1 = require("../../../serde/decode");
class AzleNat16 {
    constructor() {
        this._azleKind = 'AzleNat16';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Nat16;
    }
}
exports.AzleNat16 = AzleNat16;
AzleNat16._azleKind = 'AzleNat16';
exports.nat16 = AzleNat16;
