export type UnionToTuple<T> = {
    [key in keyof T]: T[key]
}[]

type tmp = UnionToTuple<'a' | 'b'>