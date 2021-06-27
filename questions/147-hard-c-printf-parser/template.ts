export type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type Parser<S extends string, T extends any[] = []> = S extends '' ? [] : S extends `${infer I}%${infer C}${infer R}` ?
  C extends keyof ControlsMap ? Parser<R, [...T, ControlsMap[`${C}`]]> : Parser<R, T> : T

type Clean<S extends string> = S extends '' ? S : S extends `${infer I}%%${infer R}` ? Clean<`${I}%${R}`> : S;


export type ParsePrintFormat<S extends string> = Parser<Clean<S>>
