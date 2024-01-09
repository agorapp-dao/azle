"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitVariant = void 0;
const system_types_1 = require("../../../../../system_types");
const azle_variant_1 = require("./azle_variant");
const azle_result_1 = require("./azle_result");
function visitVariant(visitor, fields, data) {
    if (data.candidType instanceof system_types_1.AzleResult) {
        return (0, azle_result_1.visitAzleResult)(visitor, fields, data);
    }
    return (0, azle_variant_1.visitAzleVariant)(visitor, fields, data);
}
exports.visitVariant = visitVariant;
