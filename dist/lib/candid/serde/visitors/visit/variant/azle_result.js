"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitAzleResult = void 0;
const result_1 = require("../../../../../system_types/result");
function visitAzleResult(visitor, fields, data) {
    if ('Ok' in data.js_data) {
        const OK_FIELD_INDEX = 0;
        const okField = fields[OK_FIELD_INDEX];
        const okData = data.js_data['Ok'];
        const okClass = data.candidType.Ok;
        return result_1.Result.Ok(okField[1].accept(visitor, {
            js_data: okData,
            candidType: okClass
        }));
    }
    if ('Err' in data.js_data) {
        const ERR_FIELD_INDEX = 1;
        const errField = fields[ERR_FIELD_INDEX];
        const errData = data.js_data['Err'];
        const errClass = data.candidType.Err;
        return result_1.Result.Err(errField[1].accept(visitor, {
            js_data: errData,
            candidType: errClass
        }));
    }
}
exports.visitAzleResult = visitAzleResult;
