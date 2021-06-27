type space = ' ' | '\n' | '\t';
type TrimR<T extends string> = T extends `${infer R}${space}` ? TrimR<R> : T
export type Trim<S extends string> = S extends `${space}${infer R}` ? Trim<R> : TrimR<S>
