import { Duration } from './types/duration';
import { TimerId } from './types/timer_id';
/**
 * Sets callback to be executed every interval. Panics if `interval` + time() is more than 2^64 - 1.
 * To cancel the interval timer, pass the returned `TimerId` to `clearTimer`.
 * Note that timers are not persisted across canister upgrades.
 *
 * @param interval The interval (in seconds) between each callback execution.
 * @param callback the function to invoke after the specified delay has passed.
 * @returns the ID of the created timer. Used to cancel the timer.
 */
export declare function setTimerInterval(interval: Duration, callback: () => void | Promise<void>): TimerId;
