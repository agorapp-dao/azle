import { IDL } from '@dfinity/candid';
import { EncodeVisitor } from '../encode_visitor';
import { DecodeVisitor } from '../decode_visitor';
import { VisitorData, VisitorResult } from '../types';
export declare function visitTuple(visitor: DecodeVisitor | EncodeVisitor, components: IDL.Type<any>[], data: VisitorData): VisitorResult;
