"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record = void 0;
const candid_1 = require("@dfinity/candid");
const to_idl_map_1 = require("./to_idl_map");
const encode_1 = require("../../serde/encode");
const decode_1 = require("../../serde/decode");
function Record(obj) {
    return {
        ...obj,
        tsType: {},
        toBytes(data) {
            return (0, encode_1.encode)(this, data);
        },
        fromBytes(bytes) {
            return (0, decode_1.decode)(this, bytes);
        },
        getIdl(parents) {
            return candid_1.IDL.Record((0, to_idl_map_1.toIdlMap)(obj, parents));
        }
    };
}
exports.Record = Record;
