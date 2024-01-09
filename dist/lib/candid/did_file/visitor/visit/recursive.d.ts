import { IDL } from '@dfinity/candid';
import { DidVisitor, VisitorData, VisitorResult } from '../did_visitor';
export declare function visitRecursive<T>(t: IDL.RecClass<T>, ty: IDL.ConstructType<T>, didVisitor: DidVisitor, data: VisitorData): VisitorResult;
