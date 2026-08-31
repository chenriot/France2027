'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

/**
 * Bascule clair / sombre. Le document d'origine suivait uniquement la
 * préférence système ; son CSS prévoyait déjà `data-theme`, on s'y branche
 * sans toucher aux palettes.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    const system = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setTheme(stored ?? system)
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Navigation privée : la bascule fonctionne, elle n'est pas mémorisée.
    }
  }

  return (
    <button type="button" onClick={toggle} aria-pressed={theme === 'dark'}>
      {theme === 'dark' ? 'Thème clair' : 'Thème sombre'}
    </button>
  )
}
