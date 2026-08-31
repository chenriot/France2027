import { formatNum } from '@/lib/format'
import type { NumCell } from '@/lib/types'

/** Un nombre formaté à la française, en chiffres à chasse fixe. */
export function Num(props: NumCell) {
  return <span className="num">{formatNum(props)}</span>
}
