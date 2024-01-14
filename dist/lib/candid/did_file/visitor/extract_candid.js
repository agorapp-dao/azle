"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractCandid = void 0;
function extractCandid(paramInfo) {
    const paramCandid = paramInfo.map(([candid, _candidTypeDefs]) => {
        return candid;
    });
    const candidTypeDefs = paramInfo.reduce((acc, [_candid, candidTypeDefs]) => {
        return { ...acc, ...candidTypeDefs };
    }, {});
    return [paramCandid, candidTypeDefs];
}
exports.extractCandid = extractCandid;
