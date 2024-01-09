/**
 * Indicates an error was encountered during a canister method.
 */
export declare const RejectionCode: {
    NoError: typeof import("../candid/types/primitive/null").AzleNull;
    SysFatal: typeof import("../candid/types/primitive/null").AzleNull;
    SysTransient: typeof import("../candid/types/primitive/null").AzleNull;
    DestinationInvalid: typeof import("../candid/types/primitive/null").AzleNull;
    CanisterReject: typeof import("../candid/types/primitive/null").AzleNull;
    CanisterError: typeof import("../candid/types/primitive/null").AzleNull;
    Unknown: typeof import("../candid/types/primitive/null").AzleNull;
} & {
    tsType: import("../candid/types/constructed/variant").RequireExactlyOne<{
        NoError: null;
        SysFatal: null;
        SysTransient: null;
        DestinationInvalid: null;
        CanisterReject: null;
        CanisterError: null;
        Unknown: null;
    }, "NoError" | "SysFatal" | "SysTransient" | "DestinationInvalid" | "CanisterReject" | "CanisterError" | "Unknown">;
    toBytes(data: any): Uint8Array;
    fromBytes(bytes: Uint8Array): any;
    getIdl(parents: any): import("@dfinity/candid/lib/cjs/idl").VariantClass;
};
export type RejectionCode = typeof RejectionCode.tsType;
