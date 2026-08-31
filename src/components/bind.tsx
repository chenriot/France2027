import type { ReactNode } from 'react'
import { cellText, formatNum, formatValue } from '@/lib/format'
import { isRawFigure } from '@/lib/types'
import type { Cell, Figure as FigureData, Row, SeriesSet, Series, Tables } from '@/lib/types'
import { Chart } from './charts/Chart'
import { Source } from './Source'

/**
 * `page` : lecture d'un chapitre — le pied de chapitre et le tableau de données
 * des figures sont rendus. `verbatim` : reconstitution du document d'origine
 * sur `/tout`, sans aucun ajout, pour que la comparaison visuelle reste valide.
 */
export type RenderMode = 'page' | 'verbatim'

/**
 * Lie les composants d'affichage au `data.ts` d'un chapitre.
 *
 * React ne propose pas de contexte dans les composants serveur, et on ne veut
 * pas d'un `"use client"` sur des pages de lecture. La liaison se fait donc par
 * un appel de fonction en tête de `content.tsx` : `<DataTable id="…" />` ne
 * reçoit toujours qu'un identifiant, et — c'est l'intérêt principal — le type
 * de `id` est restreint aux clés réellement présentes dans ce fichier. Se
 * tromper d'identifiant ne compile pas.
 */
export function chapterComponents<T extends Tables, S extends SeriesSet>({
  tables,
  series,
  mode = 'page',
}: {
  readonly tables: T
  readonly series: S
  readonly mode?: RenderMode
}) {
  function DataTable({ id }: { id: keyof T & string }) {
    return <TableView table={tables[id]} />
  }

  function Figure({ id }: { id: keyof S & string }) {
    return <FigureView figure={series[id]} mode={mode} />
  }

  return { DataTable, Figure }
}

// -------------------------------------------------------------------- tableau

/**
 * Une cellule.
 *
 * Le texte riche est injecté dans le `<td>` lui-même, sans élément
 * intercalaire : un `<span>` de plus par cellule, ce sont 2 300 nœuds qui
 * n'existent pas dans le document d'origine. Le contenu vient du dépôt — c'est
 * le balisage `<b>`, `<em>`, `<i>` du document source — jamais d'une saisie.
 */
function CellView({ cell, numeric }: { cell: Cell; numeric: boolean }) {
  if (cell === null) return <td className={numeric ? 'n' : undefined}>—</td>
  const className = (cell.n ?? numeric) ? 'n' : undefined
  const colSpan = cell.cs
  if ('v' in cell) {
    const value = formatValue(cell)
    return (
      <td className={className} colSpan={colSpan}>
        {cell.strong ? <b>{value}</b> : value}
        {cell.after ? ` ${cell.after}` : null}
      </td>
    )
  }
  return (
    <td className={className} colSpan={colSpan} dangerouslySetInnerHTML={{ __html: cell.t }} />
  )
}

function rowClass(row: Row): string | undefined {
  const classes = [
    row.emphasis ? 'hi' : '',
    row.total ? 'tot' : '',
    row.separator ? 'sep' : '',
    row.missing ? 'hole-row' : '',
  ].filter(Boolean)
  return classes.length > 0 ? classes.join(' ') : undefined
}

export function TableView({ table }: { table: Tables[string] }) {
  const body = (row: Row, key: number) => (
    <tr key={key} className={rowClass(row)}>
      {row.cells.map((cell, i) => (
        <CellView key={i} cell={cell} numeric={table.columns[i]?.type === 'number'} />
      ))}
    </tr>
  )

  return (
    <div className="tw">
      <table>
        <thead>
          <tr>
            {table.columns.map((c, i) => (
              <th
                key={`${c.key}-${i}`}
                className={c.headerNumeric ?? c.type === 'number' ? 'n' : undefined}
                dangerouslySetInnerHTML={{ __html: c.header }}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map(body)}
          {table.footer ? body(table.footer, -1) : null}
        </tbody>
      </table>
    </div>
  )
}

// --------------------------------------------------------------------- figure

export function FigureView({ figure, mode }: { figure: FigureData; mode: RenderMode }) {
  const values = isRawFigure(figure) ? figure.values : figure

  return (
    <figure className="fig">
      <p className="fig-title" dangerouslySetInnerHTML={{ __html: figure.title }} />
      {figure.subtitle ? (
        <p className="fig-sub" dangerouslySetInnerHTML={{ __html: figure.subtitle }} />
      ) : null}
      {figure.legend ? (
        <div className="keyrow">
          {figure.legend.map((k, i) => (
            <span key={`${k.label}-${i}`}>
              <i className={`k${k.color.slice(1)}`} />
              {k.label}
            </span>
          ))}
        </div>
      ) : null}
      {isRawFigure(figure) ? (
        // Pas d'élément intercalaire : le SVG conservé est injecté directement
        // dans `.figscroll`, exactement comme dans le document d'origine.
        <div className="figscroll" dangerouslySetInnerHTML={{ __html: figure.svg }} />
      ) : (
        <div className="figscroll">
          <Chart figure={figure} />
        </div>
      )}
      {figure.caption ? (
        <figcaption dangerouslySetInnerHTML={{ __html: figure.caption }} />
      ) : null}
      <Source ids={figure.sources} />
      {mode === 'page' && values ? <DataDisclosure figure={values} /> : null}
    </figure>
  )
}

/**
 * Les valeurs de la figure, en tableau replié.
 *
 * Une courbe SVG n'est pas lisible au lecteur d'écran ; le tableau l'est, et il
 * ne coûte rien puisque les valeurs existent déjà dans les données.
 */
function DataDisclosure({ figure }: { figure: Series }): ReactNode {
  return (
    <details className="figdata">
      <summary>Données de la figure</summary>
      <div className="tw">
        <table>
          <thead>
            <tr>
              <th>{figure.xAxis ? 'Abscisse' : 'Catégorie'}</th>
              {figure.series.map((s, i) => (
                <th key={`${s.key}-${i}`} className="n">
                  {s.label ?? s.key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {figure.x.map((x, i) => (
              <tr key={i}>
                <td>{String(x)}</td>
                {figure.series.map((s, k) => (
                  <td key={`${s.key}-${k}`} className="n">
                    {s.values[i] === null
                      ? cellText(null)
                      : formatNum({ v: s.values[i] as number, d: s.decimals ?? 1 })}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  )
}
