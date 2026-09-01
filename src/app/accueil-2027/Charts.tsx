// Les tracés de la page d'accueil, sous la charte de `/elections-2027`.
//
// Composants serveur : les SVG partent dans le HTML prérendu, comme les
// figures des chapitres. Aucune coordonnée n'est écrite dans les données
// (CLAUDE.md, règle 3) — tout est calculé ici, au gabarit déclaré par
// l'indicateur, puis mis à l'échelle par le navigateur.
//
// Les classes `ln`, `bar`, `wipe`, `mk`, `ring` et `hc` sont les prises de
// l'animation d'entrée : voir `src/components/client/KpiBoard.tsx`.
import { formatMagnitude, MINUS } from "@/lib/format";
import { svgNumber } from "@/lib/chart";
import type { Chart, Tone } from "./data";

const TONE: Record<Tone, string> = {
  blue: "var(--a27-blue)",
  blue2: "var(--a27-blue-2)",
  red: "var(--a27-red)",
  ink: "var(--a27-ink)",
  grey: "var(--a27-grey)",
};

export const tone = (t: Tone): string => TONE[t];

/**
 * Attributs d'un nombre qui s'incrémente. Le texte rendu est déjà la valeur
 * finale : une animation non jouée — mouvement réduit, tuile hors champ —
 * laisse la bonne valeur à l'écran.
 */
export function countAttrs(
  v: number,
  d: number,
  o: { thin?: boolean; suffix?: string; plus?: boolean } = {},
): Record<string, string> {
  const a: Record<string, string> = {
    "data-count": String(v),
    "data-d": String(d),
  };
  if (o.thin) a["data-thin"] = "1";
  if (o.suffix) a["data-suffix"] = o.suffix;
  if (o.plus) a["data-sign"] = "+";
  return a;
}

const dec = (n: number) => Number(n.toFixed(1));

// ------------------------------------------------------------------ courbe

function Spark({
  c,
  uid,
}: {
  c: Extract<Chart, { kind: "spark" }>;
  uid: string;
}) {
  const [w, h] = c.box;
  const ys = c.values;
  const lo = Math.min(...ys);
  const hi = Math.max(...ys);
  const span = hi - lo || 1;
  const px = (i: number) => dec((i / (ys.length - 1)) * w);
  const py = (v: number) => dec(h - 4 - ((v - lo) / span) * (h - 12));
  const pts = ys.map((v, i) => `${px(i)} ${py(v)}`).join(" ");
  const col = tone(c.tone);

  // `preserveAspectRatio="none"` : la courbe s'étire en largeur pour remplir
  // sa zone à toutes les tailles d'écran. Elle ne porte aucun texte, et
  // `vector-effect` garde le trait d'épaisseur constante. Le repère de fin est
  // un segment vertical épais, pour la même raison : un carré s'étirerait.
  const lastX = px(ys.length - 1);
  const lastY = py(ys[ys.length - 1]);
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      role="img"
      aria-label="évolution"
    >
      <clipPath id={uid}>
        <rect className="wipe" x="0" y="0" width={w} height={h} />
      </clipPath>
      <path
        className="area"
        clipPath={`url(#${uid})`}
        d={`M0,${h} L${ys.map((v, i) => `${px(i)},${py(v)}`).join(" L")} L${w},${h} Z`}
        fill={col}
        opacity="0.16"
      />
      <polyline
        className="ln"
        points={pts}
        stroke={col}
        vectorEffect="non-scaling-stroke"
      />
      <line
        className="mk"
        x1={lastX}
        y1={lastY - 0.5}
        x2={lastX}
        y2={lastY + 0.5}
        stroke={col}
        strokeWidth="9"
        strokeLinecap="square"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

// --------------------------------------------------------- séries comparées

function Lines({ c }: { c: Extract<Chart, { kind: "lines" }> }) {
  const [w, h] = c.box;
  const L = 2;
  const R = w - 52;
  const B = h - 17;
  const T = 8;
  const span = c.yMax - c.yMin || 1;
  const px = (xv: number) =>
    dec(L + ((xv - c.x[0]) / (c.x[c.x.length - 1] - c.x[0])) * (R - L));
  const py = (v: number) => dec(B - ((v - c.yMin) / span) * (B - T));

  const paths: { key: string; pts: string; col: string }[] = [];
  const ends: {
    key: string;
    x: number;
    y: number;
    at: number;
    v: number;
    col: string;
  }[] = [];

  for (const s of c.series) {
    const col = tone(s.tone);
    let run: string[] = [];
    let seg = 0;
    for (const [i, v] of s.values.entries()) {
      if (v === null) {
        if (run.length > 1)
          paths.push({ key: `${s.key}-${seg++}`, pts: run.join(" "), col });
        run = [];
        continue;
      }
      run.push(`${px(c.x[i])} ${py(v)}`);
    }
    if (run.length > 1)
      paths.push({ key: `${s.key}-${seg}`, pts: run.join(" "), col });
    const last = s.values.reduce<number>((a, v, i) => (v !== null ? i : a), -1);
    if (last >= 0) {
      const v = s.values[last] as number;
      ends.push({ key: s.key, x: px(c.x[last]), y: py(v), at: py(v), v, col });
    }
  }

  // Deux courbes qui finissent au même niveau ne superposent pas leurs
  // étiquettes : on les écarte du strict nécessaire.
  ends.sort((a, b) => a.y - b.y);
  for (let i = 1; i < ends.length; i++) {
    if (ends[i].y - ends[i - 1].y < 12) ends[i].y = dec(ends[i - 1].y + 12);
  }

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMinYMid meet"
      role="img"
      aria-label="séries comparées"
    >
      <line className="grid" x1={L} y1={B} x2={R} y2={B} />
      <text className="ax mk" x={L} y={h - 4}>
        {c.x[0]}
      </text>
      <text className="ax mk" x={R} y={h - 4} textAnchor="end">
        {c.x[c.x.length - 1]}
      </text>
      {paths.map((p) => (
        <polyline key={p.key} className="ln" points={p.pts} stroke={p.col} />
      ))}
      {ends.map((e) => (
        <g key={e.key}>
          <rect
            className="mk"
            x={e.x - 3}
            y={e.at - 3}
            width="6"
            height="6"
            fill={e.col}
          />
          <text
            className="lbl mk"
            x={e.x + 7}
            y={e.y + 3.5}
            fill={e.col}
            {...countAttrs(e.v, c.decimals, { thin: true })}
          >
            {svgNumber(e.v, c.decimals)}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ------------------------------------------------------------------ barres

/**
 * Les barres sont en HTML, pas en SVG : c'est la forme de la maquette
 * d'origine (`.b27-row`), et une rangée en HTML s'étire proprement à toutes
 * les largeurs, là où un SVG à `viewBox` fixe laisserait du vide à droite sur
 * les petits écrans.
 */
function Bars({ c }: { c: Extract<Chart, { kind: "bars" }> }) {
  return (
    <div className="a27-bars">
      {c.items.map((it) => (
        <div className="a27-bar" key={it.label}>
          <span className="k">{it.label}</span>
          <span className="t">
            <i
              className="bar"
              style={{
                width: `${(it.value / c.max) * 100}%`,
                background: tone(it.tone),
              }}
            />
          </span>
          <span
            className="v mk"
            style={{ color: tone(it.tone) }}
            {...countAttrs(it.value, it.decimals, { suffix: c.unit })}
          >
            {formatMagnitude(it.value, it.decimals) + c.unit}
          </span>
        </div>
      ))}
    </div>
  );
}

// ------------------------------------------------------------------ jauge

function Gauge({ c }: { c: Extract<Chart, { kind: "gauge" }> }) {
  const [w, h] = c.box;
  const r = Math.max(24, Math.min(w / 2 - 34, h - 26));
  const cx = w / 2;
  const cy = h - 8;
  const pol = (t: number, rad: number): [number, number] => [
    dec(cx + rad * Math.cos(Math.PI * (1 - t))),
    dec(cy - rad * Math.sin(Math.PI * (1 - t))),
  ];
  const arc = (t: number) => {
    const [x0, y0] = pol(0, r);
    const [x1, y1] = pol(Math.max(t, 0.004), r);
    return `M${x0},${y0} A${r},${r} 0 0 1 ${x1},${y1}`;
  };
  const t = Math.min(1, Math.max(0, c.value / c.max));
  const tr = c.ref / c.max;
  const [rx, ry] = pol(tr, r + 5);
  const [ix, iy] = pol(tr, r - 10);
  const [lx, ly] = pol(tr, r + 16);

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="jauge"
    >
      <path d={arc(1)} fill="none" stroke="var(--a27-track)" strokeWidth="14" />
      <path
        className="ln arc"
        d={arc(t)}
        fill="none"
        stroke={tone(c.tone)}
        strokeWidth="14"
        strokeLinecap="butt"
      />
      <line
        className="mk"
        x1={ix}
        y1={iy}
        x2={rx}
        y2={ry}
        stroke="var(--a27-ink)"
        strokeWidth="2.5"
      />
      <text
        className="ax mk"
        x={lx}
        y={ly + 3}
        textAnchor={tr > 0.62 ? "start" : tr < 0.38 ? "end" : "middle"}
      >
        {c.refLabel}
      </text>
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        style={{
          font: `900 ${Math.round(r * 0.46)}px/1 Archivo, sans-serif`,
          letterSpacing: "-0.03em",
        }}
        fill="var(--a27-ink)"
        {...countAttrs(c.value, c.decimals, { suffix: c.unit })}
      >
        {formatMagnitude(c.value, c.decimals) + c.unit}
      </text>
    </svg>
  );
}

// ------------------------------------------------------------------ anneau

function Donut({ c }: { c: Extract<Chart, { kind: "donut" }> }) {
  const [w, h] = c.box;
  // L'épaisseur suit le rayon, pour que le trou reste assez grand pour son
  // nombre à toutes les tailles — un anneau épais avale son propre label.
  const outer = Math.min(w, h) / 2;
  const sw = dec(outer * 0.3);
  const r = Math.max(12, outer - sw / 2);
  const circ = 2 * Math.PI * r;
  const cx = w / 2;
  const cy = h / 2;
  const filled = dec((circ * c.value) / 100);

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="part"
    >
      <circle
        cx={cx}
        cy={cy}
        r={dec(r)}
        fill="none"
        stroke="var(--a27-track)"
        strokeWidth={sw}
      />
      <circle
        className="ring"
        data-arc={filled}
        cx={cx}
        cy={cy}
        r={dec(r)}
        fill="none"
        stroke={tone(c.tone)}
        strokeWidth={sw}
        strokeDasharray={`${filled} ${dec(circ)}`}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      <text
        x={cx}
        y={dec(cy + (r - sw / 2) * 0.26)}
        textAnchor="middle"
        style={{
          font: `900 ${Math.round((r - sw / 2) * 0.72)}px/1 Archivo, sans-serif`,
          letterSpacing: "-0.03em",
        }}
        fill="var(--a27-ink)"
        {...countAttrs(c.value, 0, { suffix: " %" })}
      >
        {formatMagnitude(c.value, 0) + " %"}
      </text>
    </svg>
  );
}

// ---------------------------------------------------------- carte de chaleur

function Heat({ c }: { c: Extract<Chart, { kind: "heat" }> }) {
  const pool = c.rows.flatMap((r) =>
    r.values.filter((_, i) => c.heatColumns.includes(i)),
  );
  const peak = Math.max(...pool.map(Math.abs)) || 1;

  return (
    <>
      <table className="a27-hm">
        <thead>
          <tr>
            <th className="l" />
            {c.columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {c.rows.map((row) => (
            <tr key={row.label}>
              <td className="l">{row.label}</td>
              {row.values.map((v, ci) => {
                const heated = c.heatColumns.includes(ci);
                const alpha = heated
                  ? Math.round(8 + (Math.abs(v) / peak) * 62)
                  : 0;
                const base = c.diverging
                  ? v < 0
                    ? "var(--a27-red)"
                    : "var(--a27-blue)"
                  : ci === c.columns.length - 1
                    ? "var(--a27-blue)"
                    : "var(--a27-ink)";
                return (
                  <td
                    key={c.columns[ci]}
                    className={`hc${alpha > 52 ? " dark" : ""}`}
                    style={{
                      background: heated
                        ? `color-mix(in srgb, ${base} ${alpha}%, #fff)`
                        : "var(--a27-track)",
                    }}
                  >
                    {(v > 0 && c.diverging ? "+" : v < 0 ? MINUS : "") +
                      formatMagnitude(v, c.decimals) +
                      c.unit}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="a27-ramp">
        <span>{c.ramp[0]}</span>
        <i
          style={{
            background: c.diverging
              ? "linear-gradient(90deg, var(--a27-red), var(--a27-track), var(--a27-blue))"
              : "linear-gradient(90deg, color-mix(in srgb, var(--a27-blue) 8%, #fff), var(--a27-blue))",
          }}
        />
        <span>{c.ramp[1]}</span>
      </p>
    </>
  );
}

// ------------------------------------------------------------------- rangs

function Ranks({ c }: { c: Extract<Chart, { kind: "ranks" }> }) {
  return (
    <div className="a27-ranks">
      {c.rows.map((r) => (
        <div className="a27-rank" key={r.label}>
          <span className="pos" style={{ color: tone(r.tone) }}>
            {r.pos}
            <sup>{r.suffix}</sup>
          </span>
          <span className="lab">
            <b>{r.label}</b> — {r.detail}
            <span className="a27-strip">
              {Array.from({ length: r.slots }, (_, i) => (
                <i
                  key={i}
                  style={i === r.at ? { background: tone(r.tone) } : undefined}
                />
              ))}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------- aiguillage

export function KpiChart({ chart, uid }: { chart: Chart; uid: string }) {
  switch (chart.kind) {
    case "spark":
      return <Spark c={chart} uid={uid} />;
    case "lines":
      return <Lines c={chart} />;
    case "bars":
      return <Bars c={chart} />;
    case "gauge":
      return <Gauge c={chart} />;
    case "donut":
      return <Donut c={chart} />;
    case "heat":
      return <Heat c={chart} />;
    case "ranks":
      return <Ranks c={chart} />;
  }
}
