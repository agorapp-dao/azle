"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitVec = void 0;
function visitVec(ty, didVisitor, data) {
    const candid = ty.accept(didVisitor, { ...data, isOnService: false });
    return [`vec ${candid[0]}`, candid[1]];
}
exports.visitVec = visitVec;
