"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RejectionCode = void 0;
const variant_1 = require("../candid/types/constructed/variant");
const null_1 = require("../candid/types/primitive/null");
/**
 * Indicates an error was encountered during a canister method.
 */
exports.RejectionCode = (0, variant_1.Variant)({
    NoError: null_1.Null,
    SysFatal: null_1.Null,
    SysTransient: null_1.Null,
    DestinationInvalid: null_1.Null,
    CanisterReject: null_1.Null,
    CanisterError: null_1.Null,
    Unknown: null_1.Null
});
