"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.int8 = exports.AzleInt8 = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../../serde/encode");
const decode_1 = require("../../../serde/decode");
class AzleInt8 {
    constructor() {
        this._azleKind = 'AzleInt8';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Int8;
    }
}
exports.AzleInt8 = AzleInt8;
AzleInt8._azleKind = 'AzleInt8';
exports.int8 = AzleInt8;
