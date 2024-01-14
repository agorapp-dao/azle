import { IDL } from '@dfinity/candid';
import { DidVisitor, VisitorData, VisitorResult } from '../did_visitor';
export declare function visitVariant(fields: [string, IDL.Type<any>][], didVisitor: DidVisitor, data: VisitorData): VisitorResult;
