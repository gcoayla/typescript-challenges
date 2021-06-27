import { Diff } from './template'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type tmp = Diff<Foo, Bar>

type cases = [Expect<Equal<Diff<Foo, Bar>, { gender: number }>>]
