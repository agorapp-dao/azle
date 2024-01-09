import { IDL } from '@dfinity/candid';
import { CandidType, Parent } from './index';
export type _AzleRecursiveFunction = {
    (...args: any[]): CandidType;
    azleName?: string;
    isRecursive?: boolean;
    getIdl?: (parents: Parent[]) => IDL.Type<any>;
};
export declare function Recursive(candidTypeCallback: any): any;
