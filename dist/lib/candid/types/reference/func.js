"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Func = void 0;
const index_1 = require("../../index");
const candid_1 = require("@dfinity/candid");
const encode_1 = require("../../serde/encode");
const decode_1 = require("../../serde/decode");
const modeToCandid = {
    query: ['query'],
    oneway: ['oneway'],
    update: []
};
function Func(paramCandidTypes, returnCandidTypes, mode) {
    return {
        tsType: {},
        toBytes(data) {
            return (0, encode_1.encode)(this, data);
        },
        fromBytes(bytes) {
            return (0, decode_1.decode)(this, bytes);
        },
        getIdl(parents) {
            return candid_1.IDL.Func((0, index_1.toIdlArray)(paramCandidTypes, parents), (0, index_1.toIdlArray)(returnCandidTypes, parents), modeToCandid[mode]);
        }
    };
}
exports.Func = Func;
