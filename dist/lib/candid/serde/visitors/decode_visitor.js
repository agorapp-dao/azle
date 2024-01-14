"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecodeVisitor = void 0;
const candid_1 = require("@dfinity/candid");
const record_1 = require("./visit/record");
const recursive_1 = require("./visit/recursive");
const tuple_1 = require("./visit/tuple");
const variant_1 = require("./visit/variant");
const vec_1 = require("./visit/vec");
/**
 * When we decode a Service we are given a principal. We need to use that
 * principal to create a Service class. Same things applies to Funcs except
 * that it has a principal and a name.
 */
class DecodeVisitor extends candid_1.IDL.Visitor {
    visitService(t, data) {
        return data.candidType(data.js_data);
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
     * Converts empty arrays to `{None: null}` and an array with one item into
     * `{Some: value}`, transforming the value as needed as well.
     * @param t the IDL of the Opt class.
     * @param ty the IDL type of the `Some` value.
     * @param data {VisitorData<[] | [CandidType], AzleOpt<CandidType>>}
     * `data.js_data` is the raw array opt value. `data.js_class` is an
     * `AzleOpt<T>`.
     * @returns an object representation of an opt with a transformed some value
     * if necessary.
     */
    visitOpt(t, ty, data) {
        if (data.js_data.length === 0) {
            return { None: null };
        }
        const candid = ty.accept(this, {
            js_data: data.js_data[0],
            candidType: data.candidType.innerType
        });
        return {
            Some: candid
        };
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
exports.DecodeVisitor = DecodeVisitor;
