import { UnionToIntersection } from './template'

type tmp = UnionToIntersection<'foo' | 42 | true>
type tmp2 = 'foo' & 42 & true
type tmp3 = UnionToIntersection<(() => 'foo') | ((i: 42) => true)>

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<
    Equal<
      UnionToIntersection<(() => 'foo') | ((i: 42) => true)>,
      (() => 'foo') & ((i: 42) => true)
    >
  >,
]
