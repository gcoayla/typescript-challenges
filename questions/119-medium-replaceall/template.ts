export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
  > = S extends '' ? S : From extends '' ? S : S extends `${infer L}${From}${infer R}` ? `${L}${To}${ReplaceAll<`${R}`, From, To>}` : S
