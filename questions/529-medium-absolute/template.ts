// type numberToStr<T extends number | string | bigint> = T extends string ? T : `${T}`

export type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? R : `${T}`
