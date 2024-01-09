"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.text = exports.AzleText = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../serde/encode");
const decode_1 = require("../../serde/decode");
class AzleText {
    constructor() {
        this._azleKind = 'AzleText';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Text;
    }
}
exports.AzleText = AzleText;
AzleText._azleKind = 'AzleText';
exports.text = AzleText;
