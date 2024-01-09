"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitOpt = void 0;
function visitOpt(ty, didVisitor, data) {
    const candid = ty.accept(didVisitor, { ...data, isOnService: false });
    return [`opt ${candid[0]}`, candid[1]];
}
exports.visitOpt = visitOpt;
