export type Diff<O, O1> = {
    [key in keyof O | keyof O1 as key extends keyof O & keyof O1 ? never : key]: key extends keyof O ? O[key] : key extends keyof O1 ? O1[key] : never
}
