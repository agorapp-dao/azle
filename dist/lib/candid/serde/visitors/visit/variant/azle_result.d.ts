import { IDL } from '@dfinity/candid';
import { EncodeVisitor } from '../../encode_visitor';
import { DecodeVisitor } from '../../decode_visitor';
import { VisitorData } from '../../types';
export declare function visitAzleResult(visitor: DecodeVisitor | EncodeVisitor, fields: [string, IDL.Type<any>][], data: VisitorData): {
    Ok: any;
} | {
    Err: any;
} | undefined;
