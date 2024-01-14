import { JSCanisterConfig, JavaScript, TypeScript } from './utils/types';
import { Result } from './utils/result';
export declare function compileTypeScriptToJavaScript(main: string, canisterConfig: JSCanisterConfig): Promise<Result<JavaScript, unknown>>;
export declare function bundleAndTranspileJs(ts: TypeScript): Promise<JavaScript>;
export declare function bundleFromString(ts: TypeScript): Promise<JavaScript>;
