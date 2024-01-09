"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUpdateMethods = exports.createQueryMethods = void 0;
function createQueryMethods(canisterOptions) {
    return Object.entries(canisterOptions)
        .filter(([_name, canisterMethod]) => canisterMethod.mode === 'query')
        .map(([methodName, canisterMethod]) => createQueryMethod(methodName, canisterMethod.async, canisterMethod.guard));
}
exports.createQueryMethods = createQueryMethods;
function createUpdateMethods(canisterOptions) {
    return Object.entries(canisterOptions)
        .filter(([_name, canisterMethod]) => canisterMethod.mode === 'update')
        .map(([methodName, canisterMethod]) => createUpdateMethod(methodName, canisterMethod.guard));
}
exports.createUpdateMethods = createUpdateMethods;
function createQueryMethod(methodName, isComposite, guardFunction) {
    return {
        name: methodName,
        composite: isComposite,
        guard_name: createGlobalGuard(guardFunction, methodName)
    };
}
function createUpdateMethod(methodName, guardFunction) {
    return {
        name: methodName,
        guard_name: createGlobalGuard(guardFunction, methodName)
    };
}
function createGlobalGuard(guard, guardedMethodName) {
    if (guard === undefined) {
        return undefined;
    }
    const guardName = `_azleGuard_${guardedMethodName}`;
    globalThis._azleGuardFunctions[guardName] = guard;
    return guardName;
}
