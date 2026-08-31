'use client'

import { useEffect, useRef, useState } from 'react'
import { normalize } from '@/lib/format'

interface Entry {
  readonly i: string
  readonly t: string
  readonly s: string
  readonly c: string
  readonly n: string
}

/**
 * Recherche sur l'ensemble du dossier.
 *
 * Le document d'origine filtrait les fiches de la page courante ; l'index est
 * ici transverse, chargé à la première frappe seulement. Sans JavaScript, le
 * champ est absent et le sommaire complet reste navigable.
 */
export function Search() {
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState<Entry[] | null>(null)
  const loading = useRef(false)

  useEffect(() => {
    if (query === '' || index !== null || loading.current) return
    loading.current = true
    fetch('/search-index.json')
      .then((r) => r.json())
      .then(setIndex)
      .catch(() => setIndex([]))
  }, [query, index])

  const needle = normalize(query.trim())
  const results =
    needle.length < 2 || !index
      ? []
      : index.filter((e) => e.n.includes(needle) || normalize(e.t).includes(needle)).slice(0, 40)

  return (
    <>
      <input
        className="filter"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Chercher dans tout le dossier…"
        aria-label="Chercher dans tout le dossier"
      />
      {needle.length >= 2 ? (
        <ul className="results">
          {results.length === 0 ? (
            <li>{index ? 'Aucune fiche' : 'Chargement…'}</li>
          ) : (
            results.map((e) => (
              <li key={`${e.s}-${e.i}`}>
                <a href={`/${e.s}#${e.i}`}>
                  {e.t}
                  <span className="where">{e.c}</span>
                </a>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </>
  )
}
