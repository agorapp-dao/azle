import { AzleIc } from './ic/types/azle_ic';
declare global {
    var _azleIc: AzleIc | undefined;
    var _azleResolveIds: {
        [key: string]: (buf: ArrayBuffer) => void;
    };
    var _azleRejectIds: {
        [key: string]: (err: any) => void;
    };
    var _azleIcTimers: {
        [key: string]: string;
    };
    var _azleTimerCallbacks: {
        [key: string]: () => void;
    };
    var _azleGuardFunctions: {
        [key: string]: () => any;
    };
}
