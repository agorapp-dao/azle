"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.float64 = exports.AzleFloat64 = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../../serde/encode");
const decode_1 = require("../../../serde/decode");
class AzleFloat64 {
    constructor() {
        this._azleKind = 'AzleFloat64';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Float64;
    }
}
exports.AzleFloat64 = AzleFloat64;
AzleFloat64._azleKind = 'AzleFloat64';
exports.float64 = AzleFloat64;
