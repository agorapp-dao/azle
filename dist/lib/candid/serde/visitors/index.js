"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncodeVisitor = exports.DecodeVisitor = void 0;
var decode_visitor_1 = require("./decode_visitor");
Object.defineProperty(exports, "DecodeVisitor", { enumerable: true, get: function () { return decode_visitor_1.DecodeVisitor; } });
var encode_visitor_1 = require("./encode_visitor");
Object.defineProperty(exports, "EncodeVisitor", { enumerable: true, get: function () { return encode_visitor_1.EncodeVisitor; } });
/*
 * For most of the visitors the only thing that needs to happen is to visit each
 * of the sub nodes. That is the same for both encoding and decoding. That logic
 * is extracted into these helper methods.
 */
