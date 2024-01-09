import { IDL } from '@dfinity/candid';
import { CandidTypesDefs, DidVisitor, VisitorData } from '../did_visitor';
export declare function visitService(t: IDL.ServiceClass, didVisitor: DidVisitor, data: VisitorData): [string, CandidTypesDefs];
