"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recursive = void 0;
const uuid_1 = require("uuid");
const candid_1 = require("@dfinity/candid");
function Recursive(candidTypeCallback) {
    const name = (0, uuid_1.v4)();
    let result = (...args) => {
        const candidType = candidTypeCallback();
        if (candidType.isCanister) {
            return candidType(...args);
        }
        return candidType;
    };
    result.azleName = name;
    result.isRecursive = true;
    result.getIdl = (parents) => {
        const idl = candid_1.IDL.Rec();
        let filler = candidTypeCallback();
        if (filler.isCanister) {
            filler = filler(result);
        }
        idl.fill(filler.getIdl([...parents, { idl: idl, name }]));
        return idl;
    };
    return result;
}
exports.Recursive = Recursive;
