"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitRecord = void 0;
function visitRecord(visitor, fields, data) {
    const candidFields = fields.reduce((acc, [memberName, memberIdl]) => {
        const fieldData = data.js_data[memberName];
        const fieldClass = data.candidType[memberName];
        return {
            ...acc,
            [memberName]: memberIdl.accept(visitor, {
                js_data: fieldData,
                candidType: fieldClass
            })
        };
    }, {});
    return candidFields;
}
exports.visitRecord = visitRecord;
