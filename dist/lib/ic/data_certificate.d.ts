import { blob } from '../candid/types/constructed/blob';
import { Opt } from '../candid/types/constructed/opt';
/**
 * When called from a query call, returns the data certificate
 * authenticating `certifiedData` set by this canister. Otherwise returns
 * `None`.
 * @returns the data certificate or None
 */
export declare function dataCertificate(): Opt<blob>;
