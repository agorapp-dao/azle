"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitRecursive = void 0;
function visitRecursive(t, ty, didVisitor, data) {
    // For RecClasses the definition will be the name, that name will
    // reference the actual definition which will be added to the list of
    // candid type defs that will get put at the top of the candid file
    // Everything else will just be the normal inline candid def
    const usedRecClasses = data.usedRecClasses;
    if (!usedRecClasses.includes(t)) {
        const candid = ty.accept(didVisitor, {
            ...data,
            usedRecClasses: [...usedRecClasses, t],
            isOnService: false,
            isFirstService: false
        });
        return [t.name, { ...candid[1], [t.name]: candid[0] }];
    }
    // If our list already includes this rec class then just return, we don't
    // need the list because we will get it when we go through the arm above
    return [t.name, {}];
}
exports.visitRecursive = visitRecursive;
