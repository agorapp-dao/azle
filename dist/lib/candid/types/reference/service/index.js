"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canister = void 0;
const canister_function_1 = require("./canister_function");
function Canister(canisterOptions) {
    let result = (parentOrPrincipal) => {
        const canisterFunction = (0, canister_function_1.createCanisterFunction)(canisterOptions);
        if (parentOrPrincipal !== undefined && parentOrPrincipal._isPrincipal) {
            return canisterFunction(parentOrPrincipal);
        }
        return canisterFunction;
    };
    result.isCanister = true;
    return result;
}
exports.Canister = Canister;
