"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.float32 = exports.AzleFloat32 = void 0;
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../../serde/encode");
const decode_1 = require("../../../serde/decode");
class AzleFloat32 {
    constructor() {
        this._azleKind = 'AzleFloat32';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return candid_1.IDL.Float32;
    }
}
exports.AzleFloat32 = AzleFloat32;
AzleFloat32._azleKind = 'AzleFloat32';
exports.float32 = AzleFloat32;
