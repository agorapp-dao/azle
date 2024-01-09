import { CanisterOptions } from '.';
type QueryMethod = {
    name: string;
    composite: boolean;
    guard_name: string | undefined;
};
type UpdateMethod = {
    name: string;
    guard_name: string | undefined;
};
export declare function createQueryMethods(canisterOptions: CanisterOptions): QueryMethod[];
export declare function createUpdateMethods(canisterOptions: CanisterOptions): UpdateMethod[];
export {};
