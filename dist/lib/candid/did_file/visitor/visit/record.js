"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitRecord = void 0;
const escape_candid_keywords_1 = require("../escape_candid_keywords");
const extract_candid_1 = require("../extract_candid");
function visitRecord(fields, didVisitor, data) {
    const candidFields = fields.map(([_key, value]) => value.accept(didVisitor, { ...data, isOnService: false }));
    const candid = (0, extract_candid_1.extractCandid)(candidFields);
    const field_strings = fields.map(([key, _value], index) => (0, escape_candid_keywords_1.escapeCandidKeywords)(key) + ':' + candid[0][index]);
    return [`record {${field_strings.join('; ')}}`, candid[1]];
}
exports.visitRecord = visitRecord;
