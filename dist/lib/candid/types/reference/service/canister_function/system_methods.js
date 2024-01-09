"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetSystemFunctionIdlFunction = exports.createSystemMethod = void 0;
const index_1 = require("../../../../index");
const candid_1 = require("@dfinity/candid");
function createSystemMethod(mode, canisterOptions) {
    const methodOption = Object.entries(canisterOptions).find(([_methodName, canisterMethod]) => canisterMethod.mode === mode);
    if (methodOption === undefined) {
        return undefined;
    }
    return {
        name: methodOption[0]
    };
}
exports.createSystemMethod = createSystemMethod;
function createGetSystemFunctionIdlFunction(canisterOptions) {
    return (parents) => {
        const serviceFunctionInfo = canisterOptions;
        return Object.entries(serviceFunctionInfo).reduce((accumulator, [_methodName, functionInfo]) => {
            const mode = functionInfo.mode;
            const isSystemMethod = !(mode === 'update' || mode === 'query');
            if (!isSystemMethod) {
                // IDLs that are in update and query are already accounted for in the standard getIdl function
                return accumulator;
            }
            const paramIdls = (0, index_1.toIdlArray)(functionInfo.paramCandidTypes, parents);
            const returnIdl = (0, index_1.toIdlArray)(functionInfo.returnCandidType, parents);
            return [...accumulator, candid_1.IDL.Func(paramIdls, returnIdl, [mode])];
        }, []);
    };
}
exports.createGetSystemFunctionIdlFunction = createGetSystemFunctionIdlFunction;
