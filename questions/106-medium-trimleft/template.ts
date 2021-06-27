type space = ' ' | '\n' | '\t';
export type TrimLeft<S extends string> = S extends `${space}${infer R}` ? TrimLeft<R> : S
