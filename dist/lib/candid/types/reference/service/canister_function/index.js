"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCanisterFunction = void 0;
const index_1 = require("../../../../index");
const candid_1 = require("@dfinity/candid");
const serde_1 = require("../../../../serde");
const query_update_1 = require("./query_update");
const system_methods_1 = require("./system_methods");
function createCanisterFunction(canisterOptions) {
    let canister = createCanisterFunctionBase(canisterOptions);
    canister.init = (0, system_methods_1.createSystemMethod)('init', canisterOptions);
    canister.heartbeat = (0, system_methods_1.createSystemMethod)('heartbeat', canisterOptions);
    canister.post_upgrade = (0, system_methods_1.createSystemMethod)('postUpgrade', canisterOptions);
    canister.pre_upgrade = (0, system_methods_1.createSystemMethod)('preUpgrade', canisterOptions);
    canister.inspect_message = (0, system_methods_1.createSystemMethod)('inspectMessage', canisterOptions);
    canister.queries = (0, query_update_1.createQueryMethods)(canisterOptions);
    canister.updates = (0, query_update_1.createUpdateMethods)(canisterOptions);
    canister.callbacks = createCallbacks(canisterOptions);
    canister.getIdl = createGetIdlFunction(canisterOptions);
    canister.getSystemFunctionIdls =
        (0, system_methods_1.createGetSystemFunctionIdlFunction)(canisterOptions);
    return canister;
}
exports.createCanisterFunction = createCanisterFunction;
function createGetIdlFunction(canisterOptions) {
    return (parents) => {
        const serviceFunctionInfo = canisterOptions;
        // We don't want init, post upgrade, etc showing up in the idl
        const isQueryOrUpdate = (mode) => {
            return mode === 'query' || mode === 'update';
        };
        const record = Object.entries(serviceFunctionInfo)
            .filter(([_methodName, functionInfo]) => isQueryOrUpdate(functionInfo.mode))
            .reduce((accumulator, [methodName, functionInfo]) => {
            return {
                ...accumulator,
                [methodName]: createUpdateOrQueryFunctionIdl(functionInfo, parents)
            };
        }, {});
        return candid_1.IDL.Service(record);
    };
}
function createAnnotation(mode) {
    if (mode === 'query') {
        return ['query'];
    }
    return [];
}
function createUpdateOrQueryFunctionIdl(functionInfo, parents) {
    const annotations = createAnnotation(functionInfo.mode);
    const paramIdls = (0, index_1.toIdlArray)(functionInfo.paramCandidTypes, parents);
    const returnIdls = (0, index_1.toIdlArray)(functionInfo.returnCandidType, parents);
    return candid_1.IDL.Func(paramIdls, returnIdls, annotations);
}
function createCallbacks(canisterOptions) {
    return Object.entries(canisterOptions).reduce((acc, entry) => {
        const methodName = entry[0];
        const canisterMethod = entry[1];
        return {
            ...acc,
            [methodName]: canisterMethod.callback
        };
    }, {});
}
function createCanisterFunctionBase(canisterOptions) {
    return (principal) => {
        const callbacks = Object.entries(canisterOptions).reduce((acc, entry) => {
            const key = entry[0];
            const value = entry[1];
            return {
                ...acc,
                [key]: (notify, callFunction, cycles, args) => {
                    return serviceCall(principal, key, value.paramCandidTypes, value.returnCandidType)(notify, callFunction, cycles, args);
                }
            };
        }, {});
        return {
            ...callbacks,
            principal
        };
    };
}
function serviceCall(canisterId, methodName, paramCandidTypes, returnCandidType) {
    return async (notify, callFunction, cycles, args) => {
        const encodedArgs = (0, serde_1.encode)(paramCandidTypes, args);
        if (notify) {
            try {
                return callFunction(canisterId, methodName, encodedArgs, cycles);
            }
            catch (error) {
                throw error;
            }
        }
        else {
            const encodedResult = await callFunction(canisterId, methodName, encodedArgs, cycles);
            return (0, serde_1.decode)(returnCandidType, encodedResult);
        }
    };
}
