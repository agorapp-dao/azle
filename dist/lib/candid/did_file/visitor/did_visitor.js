"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DidVisitor = exports.getDefaultVisitorData = void 0;
const candid_1 = require("@dfinity/candid");
const service_1 = require("./visit/service");
const variant_1 = require("./visit/variant");
const record_1 = require("./visit/record");
const recursive_1 = require("./visit/recursive");
const primitive_1 = require("./visit/primitive");
const tuple_1 = require("./visit/tuple");
const opt_1 = require("./visit/opt");
const vec_1 = require("./visit/vec");
const func_1 = require("./visit/func");
function getDefaultVisitorData() {
    return {
        usedRecClasses: [],
        isOnService: false,
        isFirstService: false,
        systemFuncs: []
    };
}
exports.getDefaultVisitorData = getDefaultVisitorData;
class DidVisitor extends candid_1.IDL.Visitor {
    visitService(t, data) {
        return (0, service_1.visitService)(t, this, data);
    }
    visitPrimitive(t, _data) {
        return (0, primitive_1.visitPrimitive)(t);
    }
    visitTuple(_t, components, data) {
        return (0, tuple_1.visitTuple)(components, this, data);
    }
    visitOpt(_t, ty, data) {
        return (0, opt_1.visitOpt)(ty, this, data);
    }
    visitVec(_t, ty, data) {
        return (0, vec_1.visitVec)(ty, this, data);
    }
    visitFunc(t, data) {
        return (0, func_1.visitFunc)(t, this, data);
    }
    visitRec(t, ty, data) {
        return (0, recursive_1.visitRecursive)(t, ty, this, data);
    }
    visitRecord(_t, fields, data) {
        return (0, record_1.visitRecord)(fields, this, data);
    }
    visitVariant(_t, fields, data) {
        return (0, variant_1.visitVariant)(fields, this, data);
    }
}
exports.DidVisitor = DidVisitor;
