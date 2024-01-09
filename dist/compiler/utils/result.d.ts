import { AzleError } from './types';
export type Ok<T> = {
    ok: T;
};
export type Err<T> = {
    err: T;
};
export type Result<Ok, Err> = Partial<{
    ok: Ok;
    err: Err;
}>;
export declare function ok<T, V>(result: Result<T, V>): result is Ok<T>;
export declare function unwrap<Ok>(result: Result<Ok, AzleError>): Ok | never;
export declare function Err<T>(err: T): Err<T>;
export declare function Ok<T>(ok: T): Ok<T>;
