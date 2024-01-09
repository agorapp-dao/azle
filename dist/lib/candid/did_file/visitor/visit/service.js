"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitService = void 0;
const escape_candid_keywords_1 = require("../escape_candid_keywords");
const extract_candid_1 = require("../extract_candid");
function visitService(t, didVisitor, data) {
    const queryAndUpdateMethods = getQueryAndUpdateMethods(t, didVisitor, data);
    const initMethod = getSystemMethod('init', didVisitor, data);
    const postMethod = getSystemMethod('postUpgrade', didVisitor, data);
    const candidTypes = {
        ...queryAndUpdateMethods[1],
        ...initMethod[1],
        ...postMethod[1]
    };
    return serviceToCandidString(t, queryAndUpdateMethods[0], initMethod[0], postMethod[0], candidTypes, data.isFirstService);
}
exports.visitService = visitService;
function serviceToCandidString(t, canisterMethodCandidStrings, initMethodCandidString, postMethodCandidString, candidTypes, isFirstService) {
    const tab = isFirstService ? '    ' : '';
    const func_separator = isFirstService ? '\n' : ' ';
    const funcStrings = canisterMethodCandidStrings
        .map((value, index) => {
        return `${tab}${(0, escape_candid_keywords_1.escapeCandidKeywords)(t._fields[index][0])}: ${value};`;
    })
        .join(func_separator);
    const canisterParamsString = createCanisterParamsString(initMethodCandidString, postMethodCandidString);
    if (isFirstService) {
        return [
            `service: ${canisterParamsString} -> {\n${funcStrings}\n}`,
            candidTypes
        ];
    }
    return [`service {${funcStrings}}`, candidTypes];
}
function getSystemMethod(methodName, didVisitor, data) {
    const isInitFunction = (func) => func.annotations.includes(methodName);
    const result = (0, extract_candid_1.extractCandid)(data.systemFuncs
        .filter((func) => isInitFunction(func))
        .map((initFunc) => initFunc.accept(didVisitor, {
        ...data,
        isOnService: true,
        isFirstService: false
    })));
    if (result[0].length > 1) {
        console.log(`WARNING: too many ${methodName} methods detected. Expected no more than 1, found ${result[0].length}`);
    }
    return [result[0], result[1]];
}
function getQueryAndUpdateMethods(t, didVisitor, data) {
    return (0, extract_candid_1.extractCandid)(t._fields.map(([_name, func]) => func.accept(didVisitor, {
        ...data,
        isOnService: true,
        isFirstService: false
    })));
}
function createCanisterParamsString(initMethodCandidString, postMethodCandidString) {
    if (initMethodCandidString.length === 0) {
        if (postMethodCandidString.length === 0) {
            return '()';
        }
        const parts = postMethodCandidString[0].split('->');
        if (parts.length >= 2) {
            return parts[0].trim();
        }
    }
    const parts = initMethodCandidString[0].split('->');
    if (parts.length >= 2) {
        return parts[0].trim();
    }
    return '()'; // If we can't find any init or post upgrade params return empty ()
}
