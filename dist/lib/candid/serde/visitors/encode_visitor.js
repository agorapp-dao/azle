"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncodeVisitor = void 0;
const candid_1 = require("@dfinity/candid");
const tuple_1 = require("./visit/tuple");
const vec_1 = require("./visit/vec");
const record_1 = require("./visit/record");
const recursive_1 = require("./visit/recursive");
const variant_1 = require("./visit/variant");
/**
 * When we encode a Service we have a service class and we need it to be only
 * a principal. As a Service is visited the canisterId needs to be extracted so
 * it will be encoded correctly. Same thing with Funcs except we need to extract
 * the principal and name and put it into a tuple.
 */
class EncodeVisitor extends candid_1.IDL.Visitor {
    visitService(t, data) {
        return data.js_data.principal;
    }
    visitFunc(t, data) {
        return data.js_data;
    }
    visitPrimitive(t, data) {
        return data.js_data;
    }
    visitTuple(t, components, data) {
        return (0, tuple_1.visitTuple)(this, components, data);
    }
    /**
     * Converts `Some` values (`{Some: value}`) to `[value]` and `None` values
     * (`{None: null}`) to `[]` (the empty array), transforming any `Some`
     * values.
     *
     * @param t the IDL of the Opt class.
     * @param ty the IDL type of the `Some` value.
     * @param data {VisitorData<Variant<{Some: CandidType; None: null;}>,
     * AzleOpt<CandidType>>} `data.js_data` is the raw Some/None object.
     * `data.js_class` is an `AzleOpt<T>`.
     * @returns an array representation of an opt with a transformed some value
     * if necessary.
     */
    visitOpt(t, ty, data) {
        if ('Some' in data.js_data) {
            const candid = ty.accept(this, {
                js_data: data.js_data.Some,
                candidType: data.candidType.innerType
            });
            return [candid];
        }
        return [];
    }
    visitVec(t, ty, data) {
        return (0, vec_1.visitVec)(this, ty, data);
    }
    visitRec(t, ty, data) {
        return (0, recursive_1.visitRec)(this, ty, data);
    }
    visitRecord(t, fields, data) {
        return (0, record_1.visitRecord)(this, fields, data);
    }
    visitVariant(t, fields, data) {
        return (0, variant_1.visitVariant)(this, fields, data);
    }
}
exports.EncodeVisitor = EncodeVisitor;
