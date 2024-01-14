"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Principal = void 0;
const candid_1 = require("@dfinity/candid");
const principal_1 = require("@dfinity/principal");
const encode_1 = require("../../serde/encode");
const decode_1 = require("../../serde/decode");
class Principal extends principal_1.Principal {
    static toBytes(data) {
        return (0, encode_1.encode)(this, data);
    }
    static fromBytes(bytes) {
        return (0, decode_1.decode)(this, bytes);
    }
    static getIdl(_parents) {
        return candid_1.IDL.Principal;
    }
}
exports.Principal = Principal;
Principal._azleKind = 'Principal';
