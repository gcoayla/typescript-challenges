export type GetOptional<T> = {
    [key in keyof T extends infer K ? K extends keyof T ? {} extends Pick<T, K> ? K : never : never : never]?: T[key]
}
