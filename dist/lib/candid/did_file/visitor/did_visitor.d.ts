import { IDL } from '@dfinity/candid';
export type VisitorData = {
    usedRecClasses: IDL.RecClass[];
    isOnService: boolean;
    isFirstService: boolean;
    systemFuncs: IDL.FuncClass[];
};
export type VisitorResult = [CandidDef, CandidTypesDefs];
export type TypeName = string;
export type CandidDef = string;
export type CandidTypesDefs = {
    [key: TypeName]: CandidDef;
};
export declare function getDefaultVisitorData(): VisitorData;
export declare class DidVisitor extends IDL.Visitor<VisitorData, VisitorResult> {
    visitService(t: IDL.ServiceClass, data: VisitorData): VisitorResult;
    visitPrimitive<T>(t: IDL.PrimitiveType<T>, _data: VisitorData): VisitorResult;
    visitTuple<T extends any[]>(_t: IDL.TupleClass<T>, components: IDL.Type<any>[], data: VisitorData): VisitorResult;
    visitOpt<T>(_t: IDL.OptClass<T>, ty: IDL.Type<T>, data: VisitorData): VisitorResult;
    visitVec<T>(_t: IDL.VecClass<T>, ty: IDL.Type<T>, data: VisitorData): VisitorResult;
    visitFunc(t: IDL.FuncClass, data: VisitorData): VisitorResult;
    visitRec<T>(t: IDL.RecClass<T>, ty: IDL.ConstructType<T>, data: VisitorData): VisitorResult;
    visitRecord(_t: IDL.RecordClass, fields: [string, IDL.Type<any>][], data: VisitorData): VisitorResult;
    visitVariant(_t: IDL.VariantClass, fields: [string, IDL.Type<any>][], data: VisitorData): VisitorResult;
}
