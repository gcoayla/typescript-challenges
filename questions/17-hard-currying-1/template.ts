type Curry<T> = T extends (...args: infer Args) => infer R ? Args extends [infer I, ...infer r] ? (arg: I) => Curry<(...args: r) => R> : R : never
export declare function Currying<T extends Function>(fn: T): Curry<T>
