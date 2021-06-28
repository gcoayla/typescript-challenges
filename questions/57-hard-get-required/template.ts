export type GetRequired<T> = {
    [key in keyof T extends infer K ? K extends keyof T ? {} extends Pick<T, K> ? never : K : never : never]: T[key]
}
