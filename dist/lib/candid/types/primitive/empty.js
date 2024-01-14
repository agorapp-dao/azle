"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empty = exports.AzleEmpty = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../serde/encode");
const decode_1 = require("../../serde/decode");
class AzleEmpty {
    constructor() {
        this._azleKind = 'AzleEmpty';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Empty;
    }
}
exports.AzleEmpty = AzleEmpty;
AzleEmpty._azleKind = 'AzleEmpty';
exports.empty = AzleEmpty;
