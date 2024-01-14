"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitTuple = void 0;
function visitTuple(visitor, components, data) {
    const fields = components.map((value, index) => value.accept(visitor, {
        js_data: data.js_data[index],
        candidType: data.candidType.innerTypes[index]
    }));
    return [...fields];
}
exports.visitTuple = visitTuple;
