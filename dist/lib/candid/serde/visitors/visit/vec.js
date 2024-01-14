"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitVec = void 0;
const candid_1 = require("@dfinity/candid");
function visitVec(visitor, ty, data) {
    if (ty instanceof candid_1.IDL.PrimitiveType) {
        return data.js_data;
    }
    return data.js_data.map((array_elem) => {
        return ty.accept(visitor, {
            js_data: array_elem,
            candidType: data.candidType.innerType
        });
    });
}
exports.visitVec = visitVec;
