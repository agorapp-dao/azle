import { IDL } from '@dfinity/candid';
import { EncodeVisitor } from '../encode_visitor';
import { DecodeVisitor } from '../decode_visitor';
import { VisitorData, VisitorResult } from '../types';
export declare function visitVec(visitor: DecodeVisitor | EncodeVisitor, ty: IDL.Type<any>, data: VisitorData): VisitorResult;
