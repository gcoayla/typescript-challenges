type Camel<S extends string> = S extends '' ?
    S : S extends `${infer I}_${infer C}${infer R}` ?
    `${I}${Uppercase<C>}${CamelCase<R>}` : S;

export type CamelCase<S extends string> = Camel<Lowercase<S>>
