'use client'

import { useEffect } from 'react'

/**
 * Surligne dans le rail l'entrée de la section visible.
 * Repris tel quel du document d'origine, marges d'observation comprises.
 */
export function ScrollSpy() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('#toc a, .rail .extra a'))
    const targets = links.map((a) => {
      const href = a.getAttribute('href') ?? ''
      return href.startsWith('#') ? document.querySelector(href) : null
    })
    if (targets.every((t) => t === null)) return

    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          const i = targets.indexOf(e.target)
          if (i < 0) continue
          for (const l of links) l.classList.remove('on')
          links[i].classList.add('on')
        }
      },
      { rootMargin: '-10% 0px -75% 0px', threshold: 0 },
    )
    for (const t of targets) if (t) spy.observe(t)
    return () => spy.disconnect()
  }, [])

  return null
}
