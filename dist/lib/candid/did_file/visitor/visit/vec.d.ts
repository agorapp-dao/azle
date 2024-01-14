import { IDL } from '@dfinity/candid';
import { DidVisitor, VisitorData, VisitorResult } from '../did_visitor';
export declare function visitVec<T>(ty: IDL.Type<T>, didVisitor: DidVisitor, data: VisitorData): VisitorResult;
