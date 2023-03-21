import { ic, nat64, Opt, $query, Record, $update } from 'azle';

//#region Performance
type PerfResult = Record<{
    wasmBodyOnly: nat64;
    wasmIncludingPrelude: nat64;
}>;

let perfResult: Opt<PerfResult> = null;

$query;
export function getPerfResult(): Opt<PerfResult> {
    return perfResult;
}

function recordPerformance(start: nat64, end: nat64): void {
    perfResult = {
        wasmBodyOnly: end - start,
        wasmIncludingPrelude: ic.performanceCounter(0)
    };
}
//#endregion

let store: Map<string, string> = new Map();

$query;
export function get(key: string): Opt<string> {
    return store.get(key) ?? null;
}

$update;
export function set(key: string, value: string): void {
    const perfStart = ic.performanceCounter(0);

    store.set(key, value);

    const perfEnd = ic.performanceCounter(0);

    recordPerformance(perfStart, perfEnd);
}
