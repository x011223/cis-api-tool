declare module 'vtils' {
  export function castArray<T>(value: T | T[]): T[];
  export function cloneDeepFast<T>(value: T): T;
  export function forOwn<T>(obj: T, iteratee: (value: any, key: string, obj: T) => boolean | void): T;
  export function forOwn<T>(obj: { [key: string]: T }, iteratee: (value: T, key: string, obj: { [key: string]: T }) => boolean | void): { [key: string]: T };
  export function isArray(value: any): value is any[];
  export function isEmpty(value: any): boolean;
  export function isObject(value: any): value is object;
  export function mapKeys<T extends object>(obj: T, iteratee: (value: any, key: string, obj: T) => string): Record<string, any>;
  export function memoize<T extends (...args: any[]) => any>(fn: T, resolver?: (...args: Parameters<T>) => any): T & { cache: Map<any, any> };
  export function run<T>(fn: () => T): T;
  export function traverse(obj: any, callback: (value: any, key: string, parent: any) => void): void;
  export function dedent(strings: TemplateStringsArray, ...values: any[]): string;
  export function groupBy<T>(collection: T[], iteratee: (item: T) => string): Record<string, T[]>;
  export function isFunction(value: any): value is Function;
  export function last<T>(array: T[]): T | undefined;
  export function noop(...args: any[]): void;
  export function omit<T extends object, K extends keyof T>(object: T, ...paths: K[]): Omit<T, K>;
  export function uniq<T>(array: T[]): T[];
  export function values<T extends object>(object: T): Array<T[keyof T]>;
  export function wait(ms: number): Promise<void> & { cancel: () => void };
}

declare module 'vtils/string' {
  export function dedent(strings: TemplateStringsArray, ...values: any[]): string;
  export function dedent(str: string): string;
}

declare module 'vtils/types' {
  export type Defined<T> = T extends undefined ? never : T;
  export type OneOrMore<T> = T | T[];
  export type AsyncReturnType<T extends (...args: any[]) => Promise<any>> = T extends (...args: any[]) => Promise<infer R> ? R : any;
  export type AsyncOrSync<T> = T | Promise<T>;
  export type LiteralUnion<T extends U, U = string> = T | (U & { _?: never });
  export type OmitStrict<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
}