import type { ReactNode } from 'react'

const CLASS = { ok: 'v-ok', nuance: 'v-nu', faux: 'v-fx' } as const

export type VerdictKind = keyof typeof CLASS

/** Pastille de verdict d'une fiche : confirmé, à nuancer, faux. */
export function Verdict({ kind, children }: { kind: VerdictKind; children: ReactNode }) {
  return <span className={`verdict ${CLASS[kind]}`}>{children}</span>
}
