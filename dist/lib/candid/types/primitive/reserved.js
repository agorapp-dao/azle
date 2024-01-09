"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reserved = exports.AzleReserved = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../serde/encode");
const decode_1 = require("../../serde/decode");
class AzleReserved {
    constructor() {
        this._azleKind = 'AzleReserved';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Reserved;
    }
}
exports.AzleReserved = AzleReserved;
AzleReserved._azleKind = 'AzleReserved';
exports.reserved = AzleReserved;
