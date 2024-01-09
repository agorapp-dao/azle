import { Duration } from './types/duration';
import { TimerId } from './types/timer_id';
/**
 * Sets callback to be executed later, after delay. Panics if `delay` + time() is more than 2^64 - 1.
 * To cancel the timer before it executes, pass the returned `TimerId` to `clearTimer`.
 * Note that timers are not persisted across canister upgrades.
 *
 * @param delay The time (in seconds) to wait before executing the provided callback.
 * @param callback the function to invoke after the specified delay has passed.
 * @returns the ID of the created timer. Used to cancel the timer.
 */
export declare function setTimer(delay: Duration, callback: () => void | Promise<void>): TimerId;
