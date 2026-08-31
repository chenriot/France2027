import { buildChart } from '@/lib/chart'
import type { SvgNode } from '@/lib/chart'
import type { Series } from '@/lib/types'

/**
 * Rend un graphique depuis ses valeurs.
 *
 * Le tracé n'est pas décrit ici : il est calculé par `buildChart`, la fonction
 * que le script de migration utilise aussi pour vérifier, élément par élément,
 * que le SVG régénéré est identique à celui du document d'origine. Composant et
 * preuve partagent le même code — c'est ce qui rend la garantie vérifiable.
 */
export function Chart({ figure }: { figure: Series }) {
  const nodes = buildChart(figure)
  return (
    <svg
      viewBox={figure.svg.viewBox}
      className="cv"
      role="img"
      aria-labelledby={figure.svg.titleId}
      preserveAspectRatio={figure.svg.preserveAspectRatio}
    >
      <title id={figure.svg.titleId}>{figure.svg.title}</title>
      {nodes.map((node, i) => (
        <Node key={i} node={node} />
      ))}
    </svg>
  )
}

function Node({ node }: { node: SvgNode }) {
  const { tag, cls, attrs, text } = node
  const props = { className: cls, ...attrs } as Record<string, unknown>
  switch (tag) {
    case 'line':
      return <line {...props} />
    case 'polyline':
      return <polyline {...props} />
    case 'circle':
      return <circle {...props} />
    case 'rect':
      return <rect {...props} />
    case 'text':
      return <text {...props}>{text}</text>
  }
}
