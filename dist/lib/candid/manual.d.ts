import { CandidType } from './candid_type';
import { AzleVoid } from './types/primitive/void';
export declare function Manual(candidType: CandidType): typeof AzleVoid;
export type Manual<T extends CandidType> = void;
