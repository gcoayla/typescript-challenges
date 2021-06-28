export type Chainable<Obj = {}> = {
  option<T extends string, K>(key: T, value: K): Chainable<Obj & { [v in typeof key]: K }>;
  get(): Obj;
}
