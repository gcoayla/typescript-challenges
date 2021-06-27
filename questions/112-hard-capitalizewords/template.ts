type separator = ' ' | '.' | ','
type CapiWord<S extends string> = S extends '' ? S : S extends `${infer L}${infer Sym}${infer C}${infer R}` ? Sym extends separator ? `${L}${Sym}${Uppercase<C>}${CapiWord<R>}` : `${L}${CapiWord<`${Sym}${C}${R}`>}` : S
export type CapitalizeWords<S extends string> = CapiWord<Capitalize<S>>
