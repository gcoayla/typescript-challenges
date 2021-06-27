type falseTypes = false | 0 | '' | [] | { [key: string]: never }
export type AnyOf<T extends readonly any[]> = T extends [infer I, ...infer R] ? I extends falseTypes ? AnyOf<R> : true : false
