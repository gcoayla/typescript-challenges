// export type CamelCase<S extends string> = S extends `${infer I}-${infer U}${infer R}` ? `${I}${Uppercase<U>}${CamelCase<R>}` : S

export type CamelCase<S extends string> = S extends `${infer I}-${infer U}${infer R}` ? U extends '-' ? `${I}-${CamelCase<`${U}${R}`>}` : U extends Uppercase<U> ? `${I}-${Uppercase<U>}${CamelCase<R>}` : `${I}${Uppercase<U>}${CamelCase<R>}` : S
