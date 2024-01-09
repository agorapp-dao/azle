"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeCandidKeywords = void 0;
const CANDID_KEYWORDS = [
    'blob',
    'bool',
    'float32',
    'float64',
    'func',
    'int',
    'int16',
    'int32',
    'int64',
    'int8',
    'nat',
    'nat16',
    'nat32',
    'nat64',
    'nat8',
    'null',
    'opt',
    'principal',
    'query',
    'record',
    'service',
    'text',
    'variant',
    'vec'
];
function escapeCandidKeywords(key) {
    if (CANDID_KEYWORDS.includes(key)) {
        return `"${key}"`;
    }
    return key;
}
exports.escapeCandidKeywords = escapeCandidKeywords;
