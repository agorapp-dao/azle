import { Void } from '../candid/types/primitive/void';
import { TimerId } from './types/timer_id';
/**
 * Cancels an existing timer. Does nothing if the timer has already been canceled.
 * @param id The ID of the timer to be cancelled.
 */
export declare function clearTimer(timerId: TimerId): Void;
