// type kebab<T> = T extends `${infer I}${infer R}` ? I extends '-' | '_' ? `${I}${kebab<R>}` : I extends Uppercase<I> ? `-${Lowercase<I>}${kebab<R>}` : `${I}${kebab<R>}` : ''
// export type KebabCase<S extends string> = S extends `${infer I}${infer R}` ? `${Lowercase<I>}${kebab<R>}` : S
// doesn't work with emogis

export type KebabCase<S> = S extends `${infer I}${infer R}` ? R extends Uncapitalize<R> ? `${Lowercase<I>}${KebabCase<R>}` : `${Lowercase<I>}-${KebabCase<R>}` : '';

