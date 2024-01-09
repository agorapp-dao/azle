"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variant = void 0;
const to_idl_map_1 = require("./to_idl_map");
const candid_1 = require("@dfinity/candid");
const decode_1 = require("../../serde/decode");
const encode_1 = require("../../serde/encode");
function Variant(obj) {
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
            return candid_1.IDL.Variant((0, to_idl_map_1.toIdlMap)(obj, parents));
        }
    };
}
exports.Variant = Variant;
