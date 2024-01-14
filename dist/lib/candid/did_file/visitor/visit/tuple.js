"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitTuple = void 0;
const extract_candid_1 = require("../extract_candid");
function visitTuple(components, didVisitor, data) {
    const fields = components.map((value) => value.accept(didVisitor, { ...data, isOnService: false }));
    const candid = (0, extract_candid_1.extractCandid)(fields);
    return [`record {${candid[0].join('; ')}}`, candid[1]];
}
exports.visitTuple = visitTuple;
