"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.int32 = exports.AzleInt32 = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../../serde/encode");
const decode_1 = require("../../../serde/decode");
class AzleInt32 {
    constructor() {
        this._azleKind = 'AzleInt32';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Int32;
    }
}
exports.AzleInt32 = AzleInt32;
AzleInt32._azleKind = 'AzleInt32';
exports.int32 = AzleInt32;
