"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitVariant = void 0;
const escape_candid_keywords_1 = require("../escape_candid_keywords");
const extract_candid_1 = require("../extract_candid");
function visitVariant(fields, didVisitor, data) {
    const candidFields = fields.map(([key, value]) => value.accept(didVisitor, { ...data, isOnService: false }));
    const candid = (0, extract_candid_1.extractCandid)(candidFields);
    const fields_string = fields.map(([key, value], index) => (0, escape_candid_keywords_1.escapeCandidKeywords)(key) +
        (value.name === 'null' ? '' : ':' + candid[0][index]));
    return [`variant {${fields_string.join('; ')}}`, candid[1]];
}
exports.visitVariant = visitVariant;
