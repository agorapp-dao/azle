import { Result } from './result';
import { AzleError, JSCanisterConfig } from './types';
export declare function getCanisterConfig(canisterName: string): Result<JSCanisterConfig, AzleError>;
