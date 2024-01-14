"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Null = exports.AzleNull = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../serde/encode");
const decode_1 = require("../../serde/decode");
class AzleNull {
    constructor() {
        this._azleKind = 'AzleNull';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Null;
    }
}
exports.AzleNull = AzleNull;
AzleNull._azleKind = 'AzleNull';
exports.Null = AzleNull;
