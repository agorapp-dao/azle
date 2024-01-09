import { IDL } from '@dfinity/candid';
import { VisitorData, VisitorResult } from './types';
/**
 * When we encode a Service we have a service class and we need it to be only
 * a principal. As a Service is visited the canisterId needs to be extracted so
 * it will be encoded correctly. Same thing with Funcs except we need to extract
 * the principal and name and put it into a tuple.
 */
export declare class EncodeVisitor extends IDL.Visitor<VisitorData, VisitorResult> {
    visitService(t: IDL.ServiceClass, data: VisitorData): VisitorResult;
    visitFunc(t: IDL.FuncClass, data: VisitorData): VisitorResult;
    visitPrimitive<T>(t: IDL.PrimitiveType<T>, data: VisitorData): VisitorResult;
    visitTuple<T extends any[]>(t: IDL.TupleClass<T>, components: IDL.Type<any>[], data: VisitorData): VisitorResult;
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
    visitOpt<T>(t: IDL.OptClass<T>, ty: IDL.Type<T>, data: VisitorData): [] | [any];
    visitVec<T>(t: IDL.VecClass<T>, ty: IDL.Type<T>, data: VisitorData): VisitorResult;
    visitRec<T>(t: IDL.RecClass<T>, ty: IDL.ConstructType<T>, data: VisitorData): VisitorResult;
    visitRecord(t: IDL.RecordClass, fields: [string, IDL.Type<any>][], data: VisitorData): VisitorResult;
    visitVariant(t: IDL.VariantClass, fields: [string, IDL.Type<any>][], data: VisitorData): VisitorResult;
}
