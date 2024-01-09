import { IDL } from '@dfinity/candid';
import { VisitorResult } from '../did_visitor';
export declare function visitPrimitive<T>(t: IDL.PrimitiveType<T>): VisitorResult;
