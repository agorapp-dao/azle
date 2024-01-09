"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bool = exports.AzleBool = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../serde/encode");
const decode_1 = require("../../serde/decode");
class AzleBool {
    constructor() {
        this._azleKind = 'AzleBool';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Bool;
    }
}
exports.AzleBool = AzleBool;
AzleBool._azleKind = 'AzleBool';
exports.bool = AzleBool;
