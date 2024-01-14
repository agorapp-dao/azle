"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toIdlMap = void 0;
const to_idl_1 = require("../../to_idl");
function toIdlMap(candidMap, parent) {
    const idlMap = {};
    for (const key in candidMap) {
        if (candidMap.hasOwnProperty(key)) {
            const candidType = candidMap[key];
            idlMap[key] = (0, to_idl_1.toIdl)(candidType, parent);
        }
    }
    return idlMap;
}
exports.toIdlMap = toIdlMap;
