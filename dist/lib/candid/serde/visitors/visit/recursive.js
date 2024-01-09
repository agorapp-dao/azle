"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitRec = void 0;
function visitRec(visitor, ty, data) {
    let candidType = data.candidType();
    if (candidType.isCanister) {
        candidType = candidType([]);
    }
    return ty.accept(visitor, {
        ...data,
        candidType
    });
}
exports.visitRec = visitRec;
