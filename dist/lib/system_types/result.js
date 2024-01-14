"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Err = exports.Ok = exports.Result = exports.AzleResult = void 0;
const to_idl_1 = require("../candid/to_idl");
const candid_1 = require("@dfinity/candid");
class AzleResult {
    constructor(ok, err) {
        this.Ok = ok;
        this.Err = err;
    }
    getIdl(parents) {
        return candid_1.IDL.Variant({
            Ok: (0, to_idl_1.toIdl)(this.Ok, parents),
            Err: (0, to_idl_1.toIdl)(this.Err, parents)
        });
    }
}
exports.AzleResult = AzleResult;
function Result(ok, err) {
    return new AzleResult(ok, err);
}
exports.Result = Result;
(function (Result) {
    function Ok(value) {
        return { Ok: value };
    }
    Result.Ok = Ok;
    function Err(value) {
        return { Err: value };
    }
    Result.Err = Err;
})(Result || (exports.Result = Result = {}));
function Ok(value) {
    return { Ok: value };
}
exports.Ok = Ok;
function Err(value) {
    return { Err: value };
}
exports.Err = Err;
