"use client";

// Le comportement de la mosaïque d'indicateurs de `/accueil-2027`.
//
// Ce composant n'écrit aucun contenu : les tuiles, leurs faces et leurs
// tracés sortent du build (voir `src/app/accueil-2027/Tile.tsx`). Il se
// contente de choisir la face visible et de rejouer l'animation d'entrée.
// C'est ce qui permet à la page de rester une page serveur, prérendue —
// CLAUDE.md, règle 7.
import { useEffect, useRef } from "react";
import { formatMagnitude, MINUS, THOUSANDS, THOUSANDS_SVG } from "@/lib/format";

const EASE = "cubic-bezier(.22,.61,.36,1)";
const DUR = {
  line: 1000,
  bar: 720,
  arc: 950,
  count: 950,
  mark: 340,
  cell: 320,
};
/** Décalage entre le retournement et le départ du tracé : la carte doit être
 *  revenue de profil avant que le graphique ne commence à se construire. */
const AFTER_FLIP = 180;
const FLIP = 340;

type Cleanup = () => void;

/** Un nombre en cours d'incrémentation, au format du dossier. */
function textOf(el: HTMLElement | SVGElement, v: number): string {
  const d = Number(el.dataset.d ?? 0);
  const thin = el.dataset.thin === "1";
  const suffix = el.dataset.suffix ?? "";
  const plus = el.dataset.sign === "+";
  const sign = v < 0 ? MINUS : plus && v > 0 ? "+" : "";
  return (
    sign +
    formatMagnitude(v, d, true, thin ? THOUSANDS_SVG : THOUSANDS) +
    suffix
  );
}

function countUp(
  el: HTMLElement | SVGElement,
  delay: number,
  alive: () => boolean,
): void {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target)) return;
  const start = performance.now() + delay;
  el.textContent = textOf(el, 0);
  const tick = (now: number) => {
    if (!alive()) return;
    if (now < start) return void requestAnimationFrame(tick);
    const p = Math.min(1, (now - start) / DUR.count);
    el.textContent = textOf(el, target * (1 - (1 - p) ** 3));
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = textOf(el, target);
  };
  requestAnimationFrame(tick);
}

/** Repart de l'état initial sans transition, puis rend la main au navigateur. */
function reset(el: HTMLElement | SVGElement, apply: () => void): void {
  el.style.transition = "none";
  apply();
  void el.getBoundingClientRect();
}

function run(
  el: HTMLElement | SVGElement,
  prop: "strokeDashoffset" | "transform" | "opacity",
  value: string,
  dur: number,
  delay: number,
): void {
  // `transition` veut le nom CSS, l'affectation veut le nom JavaScript : les
  // deux ne s'écrivent pas pareil.
  const css = prop.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
  el.style.transition = `${css} ${dur}ms ${EASE} ${delay}ms`;
  el.style[prop] = value;
}

/**
 * Ramène une face à son état « avant », puis la relâche : courbes non tracées,
 * barres à zéro, arcs vides, compteurs à zéro. Le balisage, lui, porte
 * toujours l'état final — une animation non jouée laisse la bonne valeur.
 */
function enter(face: HTMLElement, lag: number, alive: () => boolean): void {
  const all = <T extends Element>(sel: string) => [
    ...face.querySelectorAll<T>(sel),
  ];

  all<SVGGeometryElement>(".a27-plot .ln").forEach((el, i) => {
    let len = 0;
    try {
      len = el.getTotalLength();
    } catch {
      return;
    }
    if (!len) return;
    reset(el, () => {
      el.style.strokeDasharray = String(len);
      el.style.strokeDashoffset = String(len);
    });
    run(el, "strokeDashoffset", "0", DUR.line, lag + i * 90);
  });

  all<SVGElement>(".a27-plot .wipe").forEach((el) => {
    reset(el, () => (el.style.transform = "scaleX(0)"));
    run(el, "transform", "scaleX(1)", DUR.line, lag);
  });

  all<SVGElement>(".a27-plot .ring").forEach((el) => {
    reset(el, () => (el.style.strokeDashoffset = el.dataset.arc ?? "0"));
    run(el, "strokeDashoffset", "0", DUR.arc, lag + 80);
  });

  all<HTMLElement | SVGElement>(".a27-plot .bar").forEach((el, i) => {
    reset(el, () => (el.style.transform = "scaleX(0)"));
    run(el, "transform", "scaleX(1)", DUR.bar, lag + i * 90);
  });

  all<HTMLElement>(".a27-hm .hc").forEach((el, i) => {
    const delay = lag + i * 22;
    reset(el, () => {
      el.style.opacity = "0";
      el.style.transform = "translateY(5px)";
    });
    el.style.transition = `opacity ${DUR.cell}ms ease ${delay}ms, transform ${DUR.cell}ms ${EASE} ${delay}ms`;
    el.style.opacity = "1";
    el.style.transform = "none";
  });

  all<HTMLElement>(".a27-strip i[style]").forEach((el) => {
    reset(el, () => (el.style.transform = "scaleX(0)"));
    run(el, "transform", "scaleX(1)", DUR.bar, lag + 260);
  });

  // Repères, points et étiquettes d'axe : une fois le tracé posé, pas avant.
  all<HTMLElement | SVGElement>(".a27-plot .mk").forEach((el) => {
    reset(el, () => (el.style.opacity = "0"));
    run(el, "opacity", "1", DUR.mark, lag + DUR.line * 0.72);
  });

  all<HTMLElement | SVGElement>("[data-count]").forEach((el, i) => {
    const inSvg = el.closest("svg") !== null;
    countUp(el, lag + (inSvg ? DUR.line * 0.55 : 0) + i * 45, alive);
  });
}

/** Une tuile : sa rotation, ses pastilles, sa jauge de temps. */
function wire(
  tile: HTMLElement,
  offset: number,
  state: { paused: boolean },
  alive: () => boolean,
): Cleanup {
  const card = tile.querySelector<HTMLElement>(".a27-card");
  const faces = [...tile.querySelectorAll<HTMLElement>(".a27-face")];
  const dots = [
    ...tile.querySelectorAll<HTMLButtonElement>(".a27-pips button"),
  ];
  const bar = tile.querySelector<HTMLElement>(".a27-tick i");
  if (!card || faces.length === 0) return () => {};

  const every = Number(tile.dataset.every ?? 10000);
  const axis = tile.dataset.axis === "x" ? "X" : "Y";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  let current = 0;
  let elapsed = -offset;
  let last = performance.now();
  let hovered = false;
  let busy = false;
  let seen = false;
  let frame = 0;
  const timers: ReturnType<typeof setTimeout>[] = [];

  const paint = (i: number) => {
    faces.forEach((f, k) => f.classList.toggle("on", k === i));
    dots.forEach((d, k) =>
      d.setAttribute("aria-current", k === i ? "true" : "false"),
    );
  };

  const go = (i: number) => {
    elapsed = 0;
    if (busy || i === current) return;
    if (reduce.matches) {
      current = i;
      paint(i);
      return;
    }
    busy = true;
    card.style.transform = `rotate${axis}(90deg)`;
    card.style.opacity = "0.3";
    timers.push(
      setTimeout(() => {
        if (!alive()) return;
        current = i;
        paint(i);
        card.style.transition = "none";
        card.style.transform = `rotate${axis}(-90deg)`;
        requestAnimationFrame(() => {
          card.style.transition = "";
          card.style.transform = `rotate${axis}(0deg)`;
          card.style.opacity = "1";
          enter(faces[current], AFTER_FLIP, alive);
          timers.push(setTimeout(() => (busy = false), FLIP));
        });
      }, FLIP),
    );
  };

  paint(0);
  dots.forEach((d, i) =>
    d.addEventListener("click", (e) => {
      e.stopPropagation();
      go(i);
    }),
  );
  const onEnterTile = () => (hovered = true);
  const onLeaveTile = () => (hovered = false);
  const onClick = () => go((current + 1) % faces.length);
  tile.addEventListener("mouseenter", onEnterTile);
  tile.addEventListener("mouseleave", onLeaveTile);
  card.addEventListener("click", onClick);

  // Première apparition : l'animation attend que la tuile entre dans le champ.
  const io = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      seen = true;
      if (!reduce.matches) enter(faces[current], 0, alive);
    },
    { threshold: 0.3 },
  );
  io.observe(tile);

  const loop = (now: number) => {
    frame = requestAnimationFrame(loop);
    const dt = Math.min(now - last, 250);
    last = now;
    if (state.paused || hovered || busy || !seen || reduce.matches) return;
    elapsed += dt;
    const p = elapsed / every;
    if (bar)
      bar.style.width = `${Math.max(0, Math.min(100, p * 100)).toFixed(1)}%`;
    if (p >= 1) go((current + 1) % faces.length);
  };
  frame = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(frame);
    io.disconnect();
    timers.forEach(clearTimeout);
    tile.removeEventListener("mouseenter", onEnterTile);
    tile.removeEventListener("mouseleave", onLeaveTile);
    card.removeEventListener("click", onClick);
  };
}

export function KpiBoard() {
  const state = useRef({ paused: false });

  useEffect(() => {
    let live = true;
    const alive = () => live;
    const tiles = [...document.querySelectorAll<HTMLElement>(".a27-tile")];
    const cleanups = tiles.map((t, i) =>
      wire(t, 1200 + i * 900, state.current, alive),
    );

    const button = document.getElementById(
      "a27-pause",
    ) as HTMLButtonElement | null;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const toggle = () => {
      state.current.paused = !state.current.paused;
      if (!button) return;
      button.setAttribute("aria-pressed", String(state.current.paused));
      button.textContent = state.current.paused ? "Reprendre" : "Suspendre";
    };
    if (button) {
      button.hidden = false;
      button.addEventListener("click", toggle);
      if (reduce.matches) toggle();
    }

    return () => {
      live = false;
      cleanups.forEach((c) => c());
      button?.removeEventListener("click", toggle);
    };
  }, []);

  return null;
}
