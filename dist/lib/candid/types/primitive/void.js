"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Void = exports.AzleVoid = void 0;
const decode_1 = require("../../serde/decode");
const encode_1 = require("../../serde/encode");
class AzleVoid {
    constructor() {
        this._azleKind = 'AzleVoid';
    }
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl() {
        return [];
    }
}
exports.AzleVoid = AzleVoid;
AzleVoid._azleKind = 'AzleVoid';
exports.Void = AzleVoid;
