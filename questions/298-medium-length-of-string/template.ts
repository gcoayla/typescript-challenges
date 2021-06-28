type strToArr<U extends string, Arr extends string[] = []> = U extends `${infer I}${infer R}` ? strToArr<R, [...Arr, I]> : Arr;

//type tmp = strToArr<'123'>

export type LengthOfString<S extends string> = strToArr<S>['length']
