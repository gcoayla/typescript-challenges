type ControlsMap = {
    s: string
    d: number
}
export type Format<T extends string> = T extends `${infer I}%${infer C}${infer R}` ? C extends keyof ControlsMap ? (arg: ControlsMap[`${C}`]) => Format<R> : string : string
