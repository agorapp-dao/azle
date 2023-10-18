import { IDL } from '@dfinity/candid';
import { DecodeVisitor } from './decode_visitor';
import { EncodeVisitor } from './encode_visitor';
import { AzleResult, Result } from '../../../system_types/result';
export { EncodeVisitor, DecodeVisitor };

/*
 * The VisitorData gives us js_data which is the data that is about to be
 * encoded or was just decoded. js_class is the CandidType that can be used to
 * create the class.
 */
export type VisitorData = { js_data: any; candidType: any };
/**
 * The VisitorResult is the transformed version of js_data that is ready to
 * be consumed by the js or ready to be encoded.
 */
export type VisitorResult = any;

/*
 * For most of the visitors the only thing that needs to happen is to visit each
 * of the sub nodes. That is the same for both encoding and decoding. That logic
 * is extracted into these helper methods.
 */

export function visitTuple(
    visitor: DecodeVisitor | EncodeVisitor,
    components: IDL.Type<any>[],
    data: VisitorData
): VisitorResult {
    const fields = components.map((value, index) =>
        value.accept(visitor, {
            js_data: data.js_data[index],
            candidType: data.candidType.innerTypes[index]
        })
    );
    return [...fields];
}

export function visitVec(
    visitor: DecodeVisitor | EncodeVisitor,
    ty: IDL.Type<any>,
    data: VisitorData
): VisitorResult {
    if (ty instanceof IDL.PrimitiveType) {
        return data.js_data;
    }
    return data.js_data.map((array_elem: any) => {
        return ty.accept(visitor, {
            js_data: array_elem,
            candidType: data.candidType.innerType
        });
    });
}

export function visitRecord(
    visitor: DecodeVisitor | EncodeVisitor,
    fields: [string, IDL.Type<any>][],
    data: VisitorData
): VisitorResult {
    const candidFields = fields.reduce((acc, [memberName, memberIdl]) => {
        const fieldData = data.js_data[memberName];
        const fieldClass = data.candidType[memberName];

        return {
            ...acc,
            [memberName]: memberIdl.accept(visitor, {
                js_data: fieldData,
                candidType: fieldClass
            })
        };
    }, {});

    return candidFields;
}

export function visitVariant(
    visitor: DecodeVisitor | EncodeVisitor,
    fields: [string, IDL.Type<any>][],
    data: VisitorData
): VisitorResult {
    if (data.candidType instanceof AzleResult) {
        return visitAzleResult(visitor, fields, data);
    }
    return visitAzleVariant(visitor, fields, data);
}

export function visitRec<T>(
    visitor: DecodeVisitor | EncodeVisitor,
    ty: IDL.ConstructType<T>,
    data: VisitorData
): VisitorResult {
    let candidType = data.candidType();
    if (candidType.isCanister) {
        candidType = candidType([]);
    }
    return ty.accept(visitor, {
        ...data,
        candidType
    });
}

function visitAzleResult(
    visitor: DecodeVisitor | EncodeVisitor,
    fields: [string, IDL.Type<any>][],
    data: VisitorData
) {
    if ('Ok' in data.js_data) {
        const OK_FIELD_INDEX = 0;
        const okField = fields[OK_FIELD_INDEX];
        const okData = data.js_data['Ok'];
        const okClass = data.candidType.Ok;

        return Result.Ok(
            okField[1].accept(visitor, {
                js_data: okData,
                candidType: okClass
            })
        );
    }
    if ('Err' in data.js_data) {
        const ERR_FIELD_INDEX = 1;
        const errField = fields[ERR_FIELD_INDEX];
        const errData = data.js_data['Err'];
        const errClass = data.candidType.Err;
        return Result.Err(
            errField[1].accept(visitor, {
                js_data: errData,
                candidType: errClass
            })
        );
    }
}

function visitAzleVariant(
    visitor: DecodeVisitor | EncodeVisitor,
    fields: [string, IDL.Type<any>][],
    data: VisitorData
) {
    const candidFields = fields.reduce((acc, [memberName, memberIdl]) => {
        const fieldData = data.js_data[memberName];
        const fieldClass = data.candidType[memberName];
        if (fieldData === undefined) {
            // If the field data is undefined then it is not the variant that was used
            return acc;
        }
        return {
            ...acc,
            [memberName]: memberIdl.accept(visitor, {
                candidType: fieldClass,
                js_data: fieldData
            })
        };
    }, {});

    return candidFields;
}
