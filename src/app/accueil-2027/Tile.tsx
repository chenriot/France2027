// Une tuile : une pile de faces superposées, dont une seule est visible.
//
// Composant serveur. Le balisage sort complet du build — toutes les faces,
// tous les tracés, toutes les valeurs finales. `KpiBoard` ne fait ensuite que
// choisir laquelle est visible et rejouer les animations d'entrée.
import { formatValue } from '@/lib/format'
import { KpiChart, countAttrs, tone } from './Charts'
import type { Kpi, Tile as TileSpec } from './data'

function Face({ kpi, uid }: { kpi: Kpi; uid: string }) {
  return (
    <div className="a27-face">
      <p className="a27-eyebrow">
        <i style={{ background: tone(kpi.tone) }} />
        {kpi.eyebrow}
      </p>
      <h3>{kpi.title}</h3>

      {kpi.value ? (
        <p className="a27-value">
          <span className={kpi.chart ? 'a27-mid' : 'a27-big'}>
            <span {...countAttrs(kpi.value.v, kpi.value.d, { plus: kpi.value.sign === true })}>
              {formatValue(kpi.value)}
            </span>
          </span>
          {kpi.unit ? <span className="a27-unit">{kpi.unit}</span> : null}
          {kpi.delta ? (
            <span className={`a27-delta ${kpi.deltaTone ?? 'up'}`}>
              <span {...countAttrs(kpi.delta.v, kpi.delta.d, { plus: kpi.delta.sign === true })}>
                {formatValue({ ...kpi.delta, u: undefined })}
              </span>
              {kpi.delta.u ? ` ${kpi.delta.u}` : null}
            </span>
          ) : null}
        </p>
      ) : null}

      {kpi.chart ? (
        <div className="a27-plot">
          <KpiChart chart={kpi.chart} uid={uid} />
        </div>
      ) : null}

      {kpi.chart?.kind === 'lines' ? (
        <ul className="a27-legend">
          {kpi.chart.series.map((s) => (
            <li key={s.key}>
              <i style={{ background: tone(s.tone) }} />
              {s.label}
            </li>
          ))}
        </ul>
      ) : null}

      {kpi.note ? (
        <p className="a27-note" dangerouslySetInnerHTML={{ __html: kpi.note }} />
      ) : null}
      <p className="a27-src">{kpi.credit}</p>
    </div>
  )
}

export function Tile({
  spec,
  id,
  className = '',
}: {
  spec: TileSpec
  id: string
  className?: string
}) {
  return (
    <div
      className={`a27-tile ${spec.cols === 2 ? 'w2 ' : ''}${spec.rows === 2 ? 'h2 ' : ''}${className}`.trim()}
      data-every={spec.every}
      data-axis={spec.axis}
    >
      <div className="a27-card">
        {spec.faces.map((kpi, i) => (
          <Face key={kpi.title} kpi={kpi} uid={`${id}-${i}`} />
        ))}
        <div className="a27-tick">
          <i />
        </div>
        <div className="a27-pips">
          {spec.faces.map((kpi, i) => (
            <button
              key={kpi.title}
              type="button"
              aria-label={`Indicateur ${i + 1} sur ${spec.faces.length} : ${kpi.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
