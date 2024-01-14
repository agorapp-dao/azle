"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.int16 = exports.AzleInt16 = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../../serde/encode");
const decode_1 = require("../../../serde/decode");
class AzleInt16 {
    constructor() {
        this._azleKind = 'AzleInt16';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Int16;
    }
}
exports.AzleInt16 = AzleInt16;
AzleInt16._azleKind = 'AzleInt16';
exports.int16 = AzleInt16;
