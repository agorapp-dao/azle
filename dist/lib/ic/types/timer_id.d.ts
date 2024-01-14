import { nat64, AzleNat64 } from '../../candid/types/primitive/nats/nat64';
/**
 * Type returned by the {@link ic.setTimer} and {@link ic.setTimerInterval}
 * functions. Pass to {@link ic.clearTimer} to remove the timer.
 */
export declare const TimerId: typeof AzleNat64;
export type TimerId = nat64;
