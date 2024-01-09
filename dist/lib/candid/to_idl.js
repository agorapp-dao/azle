"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toIdlArray = exports.toIdl = void 0;
function toIdl(candidType, parents = []) {
    if ('azleName' in candidType) {
        const parent = parents.find((parent) => parent.name === candidType.azleName);
        // If the parent isn't undefined (ie we found one with the same name)
        // this is a recursive type and we should return the parent rec idl
        // instead of calling getIdl
        if (parent !== undefined) {
            return parent.idl;
        }
    }
    if ('isCanister' in candidType && candidType.isCanister) {
        return toIdl(candidType(), parents);
    }
    // All CandidTypes ought to have a getIdl function defined for them
    return candidType.getIdl(parents);
}
exports.toIdl = toIdl;
function toIdlArray(candidTypes, parents = []) {
    if (Array.isArray(candidTypes)) {
        return candidTypes.map((value) => toIdl(value, parents));
    }
    const idlType = toIdl(candidTypes, parents);
    return Array.isArray(idlType) ? idlType : [idlType];
}
exports.toIdlArray = toIdlArray;
