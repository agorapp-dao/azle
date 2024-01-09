"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitAzleVariant = void 0;
function visitAzleVariant(visitor, fields, data) {
    const candidFields = fields.reduce((acc, [memberName, memberIdl]) => {
        const fieldData = data.js_data[memberName];
        const fieldClass = data.candidType[memberName];
        if (fieldData === undefined) {
            // If the field data is undefined then it is not the variant that was used
            return acc;
        }
        return {
            ...acc,
            [memberName]: memberIdl.accept(visitor, {
                candidType: fieldClass,
                js_data: fieldData
            })
        };
    }, {});
    return candidFields;
}
exports.visitAzleVariant = visitAzleVariant;
