// export type Flatten<T> = {
//     [key in keyof T]: T[key] extends [infer R] ? Flatten<R> : T[key]
// }
// Doesn't work in test case 4

export type Flatten<T> = T extends [infer I, ...infer R] ? I extends any[] ? [...Flatten<I>, ...Flatten<R>] : [I, ...Flatten<R>] : []
