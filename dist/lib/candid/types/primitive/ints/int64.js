"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.int64 = exports.AzleInt64 = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../../serde/encode");
const decode_1 = require("../../../serde/decode");
class AzleInt64 {
    constructor() {
        this._azleKind = 'AzleInt64';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Int64;
    }
}
exports.AzleInt64 = AzleInt64;
AzleInt64._azleKind = 'AzleInt64';
exports.int64 = AzleInt64;
