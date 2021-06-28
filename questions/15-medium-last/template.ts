export type Last<T extends any[]> = T extends [...infer items, infer L] ? L : never
