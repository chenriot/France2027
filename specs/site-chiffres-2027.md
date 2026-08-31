# Spécification — Site « Chiffres pour 2027 »

Statut : proposition · Date : 2026-08-31
Source de référence : `Temp/chiffres2027 (3).html` (1,1 Mo, 8 721 lignes, monolithe autonome)

---

## 1. Point de départ

Le fichier existant est un document HTML unique, sans dépendance autre que Google Fonts, qui contient :

| Élément | Volume |
|---|---|
| Chapitres (`section.sec`) | 22 — synthèse + **18 thèmes** + grille de lecture des promesses + dossier expliqué simplement + bibliographie |
| Questions/fiches (`div.q`) | 210 |
| Tableaux (`<table>`) | 286 |
| Figures SVG (`figure.fig`) | 55 |
| Blocs source (`p.src`) | 197 |
| Encadrés (`.defn` / `.lim` / `.hole` / `.take`) | 78 / 138 / 58 / 13 |
| CSS | 292 lignes, en tête de fichier |
| JS | 1 bloc de 40 lignes (scrollspy + filtre) |

Ses qualités à préserver intégralement : la charte typographique (Newsreader / IBM Plex Sans / IBM Plex Mono), les tokens de couleur clair-sombre, la grammaire visuelle des encadrés (vert = définition, orange = limite de mesure, rouge = donnée manquante), la discipline « un chiffre = une source + un millésime », le sommaire latéral avec filtre.

Ses trois défauts structurels, qui motivent la refonte :

1. **Les données sont noyées dans la présentation.** Les 286 tableaux sont du HTML écrit à la main ; les 55 graphiques sont des `<polyline points="52.0,171.0 63.2,172.0 …">`, c'est-à-dire des **coordonnées d'écran**, pas des valeurs. Mettre à jour une série 2025 suppose de recalculer à la main des pixels. Personne ne peut vérifier un chiffre sans lire le SVG.
2. **Un seul fichier de 1,1 Mo.** Difficile à relire, à réviser à plusieurs, à diffuser en morceaux, ou à charger vite sur mobile.
3. **Les 197 blocs de sources sont dupliqués en texte libre.** Eurostat `gov_10a_exp` est cité une vingtaine de fois avec des libellés légèrement différents ; la bibliographie finale en est une troisième copie, tenue à la main.

---

## 2. Objectifs

**O1 — Un répertoire par chapitre.** Chacun des 18 thèmes, plus la synthèse, la grille de lecture des promesses et le dossier expliqué simplement, occupe **son propre répertoire** contenant son contenu (`content.tsx`), ses données (`data.ts`) et sa page (`page.tsx`). Un contributeur travaille sur « Logement » sans jamais ouvrir « Énergie ».

**O2 — Séparer les données du rendu.** Toute valeur affichée dans un tableau ou un graphique vit dans le `data.ts` du chapitre, dans un fichier typé, lisible et diffable — jamais dans le balisage.

**O3 — Rendre chaque chiffre auditable.** Le `data.ts` de chaque chapitre déclare, pour chaque tableau et chaque série, la ou les sources utilisées et le millésime de la donnée. Les identifiants sont résolus depuis un registre unique ; la bibliographie est **générée**, jamais recopiée. Ouvrir un seul fichier suffit à savoir d'où vient chaque chiffre d'un chapitre.

**O4 — Garantir une mise en forme cohérente par des composants.** Aucun chapitre ne fabrique son propre tableau, sa propre figure ou son propre encadré. Tous passent par le même jeu de composants partagés (§7), qui portent la totalité du balisage et des classes CSS de l'original.

**O5 — Conserver le rendu à l'identique.** La refonte est structurelle, pas graphique. Le site livré doit être visuellement indiscernable de l'original sur les pages migrées.

**O6 — Rester simple, et construit pour grandir.** Un site web ordinaire, sans machinerie inutile : pas de base de données, pas de couche d'état, pas d'abstraction posée « au cas où ». Mais le dossier grandira — nouveaux chapitres, nouveaux millésimes, nouvelles figures. La simplicité recherchée est donc celle de la structure, pas celle du raccourci : les 21 répertoires ont tous la même forme, les composants sont partagés, les données sont typées. Ajouter un 22ᵉ chapitre doit être un copier-coller de répertoire, pas une refonte.

### Non-objectifs

- Pas de CMS, pas d'authentification, pas de commentaires.
- Pas de collecte automatique des API statistiques au build : les données sont figées et versionnées, l'ingestion est un script manuel (§10).
- Pas de refonte éditoriale du texte : le contenu rédactionnel est repris tel quel.

---

## 3. Stack

| Choix | Motivation |
|---|---|
| **Next.js 15** (App Router) + TypeScript | Un répertoire = une route = un chapitre : la structure de fichiers demandée est exactement le modèle de routage de l'App Router. Composants serveur par défaut : le contenu est rendu au build, sans JS de rendu. |
| **Vercel** | Hébergement et déploiement. Build Next.js standard, sans `output: 'export'` : les pages restent prérendues au build (§9), mais on garde la porte ouverte aux capacités serveur du cadre — revalidation, route handlers, images — le jour où le dossier en aura besoin. Se fermer cette porte aujourd'hui n'apporterait rien, puisque l'hébergement est de toute façon Vercel. |
| **TSX pour le contenu** | Le texte reste du texte, mais les tableaux et figures sont des appels de composants typés : une faute de frappe dans un identifiant de tableau casse la compilation au lieu de produire un trou dans la page. |
| **`data.ts` typé + Zod** | Le typage TypeScript attrape la plupart des erreurs à l'écriture ; Zod valide au build ce que le type ne peut pas dire (source inexistante au registre, longueur de série incohérente, millésime manquant). |
| **CSS natif** (custom properties) | Le CSS existant est déjà bon et tient en 292 lignes. On le reprend **verbatim**, avec ses noms de classes. Ni Tailwind, ni CSS Modules, ni CSS-in-JS : tout changement de nom de classe est un risque de régression visuelle pour zéro bénéfice. |
| **Vitest** | Tests des utilitaires d'échelle des graphiques, du formatage FR et des invariants de données. |
| **Playwright** | Captures de non-régression visuelle (§12, critère 5). |

Alternative écartée : Astro. Il produirait moins de JavaScript (§9), mais Next.js est le cadre demandé, et l'App Router donne la correspondance répertoire ↔ chapitre ↔ route sans configuration.

Alternative écartée : `output: 'export'`. L'export statique pur produirait un dossier `out/` déployable n'importe où, mais le site est hébergé sur Vercel, qui prérend déjà tout ce qui est prérendable. L'export n'ajouterait donc aucune légèreté réelle, et retirerait par avance des possibilités (revalidation à la demande, génération d'un CSV par tableau, page de recherche côté serveur) que la croissance du dossier rendra peut-être utiles.

Alternative écartée : MDX. Le contenu en TSX pur évite une chaîne de compilation supplémentaire et rend les props des composants vérifiables par le compilateur. Le texte rédactionnel en JSX reste lisible ; c'est le seul point où le TSX est un peu moins confortable que le Markdown, et c'est un prix acceptable pour la vérification de types.

---

## 4. Arborescence

```
France2027/
├─ specs/
│  └─ site-chiffres-2027.md            ← ce document
├─ next.config.mjs
├─ package.json · tsconfig.json · vitest.config.ts · playwright.config.ts
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx                    ← <html>, polices, script anti-flash du thème
│  │  ├─ page.tsx                      ← accueil : « Comment lire ce document » + sommaire
│  │  ├─ (chapitres)/                  ← groupe de routes : n'ajoute pas de segment d'URL
│  │  │  ├─ layout.tsx                 ← gabarit commun : rail, chapeau, pied de chapitre
│  │  │  ├─ synthese/
│  │  │  │  ├─ page.tsx                ← 6 lignes : métadonnées + <Chapter>
│  │  │  │  ├─ content.tsx             ← le texte, zéro chiffre tabulé
│  │  │  │  └─ data.ts                 ← TOUTES les données du chapitre + leurs sources
│  │  │  ├─ depenses-publiques/        ← thème 1
│  │  │  │  ├─ page.tsx · content.tsx · data.ts
│  │  │  ├─ dette-deficit/             ← thème 2
│  │  │  ├─ …                          ← thèmes 3 à 17
│  │  │  ├─ perception-realite/        ← thème 18
│  │  │  ├─ grille-promesses/
│  │  │  └─ explique-simplement/
│  │  ├─ sources/page.tsx              ← bibliographie générée
│  │  └─ tout/page.tsx                 ← document intégral, imprimable
│  ├─ components/
│  │  ├─ Chapter.tsx · Question.tsx · Verdict.tsx · Num.tsx
│  │  ├─ DataTable.tsx · Figure.tsx · Source.tsx
│  │  ├─ charts/{LineChart,BarChart,StackedBar,GroupedBar,Slope,Dot}.tsx
│  │  ├─ callouts/{Definition,Limit,MissingData,Takeaway}.tsx
│  │  └─ client/{ThemeToggle,ScrollSpy,Search}.tsx   ← les seuls "use client"
│  ├─ data/
│  │  ├─ sources.ts                    ← registre unique des sources
│  │  └─ chapters.ts                   ← ordre, titres, slugs, chapeaux
│  ├─ lib/
│  │  ├─ types.ts                      ← Table, Series, SourceId, ChapterData
│  │  ├─ schemas.ts                    ← schémas Zod
│  │  ├─ scales.ts                     ← valeurs → coordonnées SVG
│  │  ├─ format.ts                     ← nombres, %, €, espaces insécables
│  │  └─ sources.ts                    ← résolution des identifiants de source
│  └─ styles/{tokens,base,print}.css
├─ scripts/
│  ├─ extract.ts                       ← extraction depuis le HTML d'origine
│  ├─ check-data.ts                    ← audit de cohérence et de traçabilité
│  └─ build-search-index.ts            ← écrit public/search-index.json
└─ public/
```

**Règle d'or :** aucun nombre dans `content.tsx` ni dans `src/components`, hors nombres cités dans une phrase rédigée. Tout ce qui est tabulé ou tracé vient du `data.ts` voisin.

**Groupe de routes.** `(chapitres)` est un groupe de routes Next : il regroupe les 21 répertoires et porte leur gabarit commun, sans apparaître dans l'URL. Les chapitres restent donc servis à `/<slug>` — `/logement`, `/energie` — comme le voulait le sommaire d'origine.

**Ordre des chapitres.** Il ne vient pas de préfixes numériques dans les noms de répertoires (ils pollueraient les URL) mais de `src/data/chapters.ts`, qui est la seule source de vérité pour l'ordre, les titres et les libellés courts du rail.

---

## 5. Les 21 répertoires de chapitre

L'ordre et les intitulés du sommaire actuel sont conservés à l'identique.

| # | Répertoire (= slug = URL) | Titre | Fiches | Tableaux | Figures |
|---|---|---|---:|---:|---:|
| — | `synthese` | Ce que l'ensemble de ces chiffres établit | 4 | 1 | 5 |
| 1 | `depenses-publiques` | Dépenses publiques, impôts et redistribution | 26 | 44 | 15 |
| 2 | `dette-deficit` | Dette et déficit | 9 | 11 | 2 |
| 3 | `retraites-travail` | Retraites et durée de travail sur une vie | 10 | 8 | 1 |
| 4 | `emploi-chomage` | Emploi, chômage et coût du travail | 23 | 55 | 10 |
| 5 | `industrie` | Industrie et désindustrialisation | 13 | 24 | 4 |
| 6 | `commerce-exterieur` | Commerce extérieur et flux financiers | 12 | 23 | 0 |
| 7 | `immigration` | Immigration et intégration | 8 | 14 | 1 |
| 8 | `ecologie-climat` | Écologie et climat | 12 | 9 | 7 |
| 9 | `energie` | Énergie | 6 | 6 | 0 |
| 10 | `europe` | Europe | 7 | 3 | 0 |
| 11 | `sante` | Santé | 5 | 6 | 0 |
| 12 | `securite-justice` | Sécurité, police, justice et prisons | 13 | 16 | 1 |
| 13 | `logement` | Logement | 10 | 5 | 2 |
| 14 | `education` | Éducation et mobilité sociale | 9 | 22 | 2 |
| 15 | `niveau-de-vie` | Niveau de vie, patrimoine et inégalités | 12 | 27 | 4 |
| 16 | `efficacite-etat` | Efficacité de l'État et des services publics | 7 | 5 | 1 |
| 17 | `demographie` | Démographie et avenir à 20 ans | 3 | 0 | 0 |
| 18 | `perception-realite` | Perception contre réalité | 4 | 6 | 0 |
| — | `grille-promesses` | Grille de lecture des promesses électorales | 3 | 0 | 0 |
| — | `explique-simplement` | Le dossier expliqué simplement | 5 | 1 | 0 |
| — | `sources` | Toutes les sources | — | généré | — |

Soit **18 thèmes**, plus la synthèse, la grille de lecture des promesses et le dossier expliqué simplement : 21 répertoires de même forme, auxquels s'ajoute la page de bibliographie, qui n'a pas de `data.ts` puisqu'elle est entièrement dérivée.

`emploi-chomage` comporte déjà deux parties (`.part`) ; `meta.parts: [{ label, title }]` les porte, sans quoi le découpage de la page est faux.

**Uniformité.** `demographie` et `grille-promesses` n'ont aucun tableau ni figure. Leur `data.ts` existe quand même et exporte des registres vides : la forme des 21 répertoires est identique, et ni les scripts d'audit ni les futurs contributeurs n'ont de cas particulier à connaître.

**Chapitres volumineux.** `depenses-publiques` (44 tableaux) et `emploi-chomage` (55 tableaux) donneraient un `data.ts` de plusieurs milliers de lignes. Dans ces deux cas seulement, le fichier devient un répertoire `data/` avec `index.ts` qui ré-exporte des fichiers thématiques. **La surface d'import reste `./data`** : le contenu ne sait pas si ses données viennent d'un fichier ou de dix, et la règle « les données d'un chapitre sont à côté de son contenu » tient toujours.

---

## 6. Modèle de données (`data.ts`)

Chaque `data.ts` exporte trois choses, et rien d'autre : les métadonnées du chapitre, ses tableaux, ses séries. Le typage vient de `src/lib/types.ts`.

```ts
import type { ChapterMeta, Tables, SeriesSet } from '@/lib/types'

export const meta: ChapterMeta = {
  slug: 'efficacite-etat',
  title: "Efficacité de l'État et des services publics",
  shortTitle: "Efficacité de l'État",
  note: "Ce que l'argent public achète, comparé à ce qu'il achète ailleurs.",
  status: 'complete',            // 'complete' | 'partiel'
  updated: '2026-08',
}

export const tables = {
  'regalien-pour-100k': {
    title: 'Effectifs régaliens et sociaux, pour 100 000 habitants',
    unit: 'pour 100 000 habitants',
    vintage: '2022',
    sources: ['cepej-2022', 'ocde-sante-2023'],
    note: 'Les juges professionnels excluent les juges de proximité.',
    columns: [
      { key: 'label',  header: 'Pour 100 000 habitants', type: 'text' },
      { key: 'fr',     header: 'France',                 type: 'number', decimals: 1 },
      { key: 'de',     header: 'Allemagne',              type: 'number', decimals: 1 },
      { key: 'median', header: 'Médiane européenne',     type: 'number', decimals: 1 },
      { key: 'gap',    header: 'Écart',                  type: 'text' },
    ],
    rows: [
      { label: 'Juges professionnels', fr: 11.3, de: 24.7, median: 17.6,
        gap: '−54 % vs Allemagne', emphasis: true },
      { label: 'Médecins', fr: 328, de: 453, median: null, gap: '−28 %' },
    ],
    footer: { label: 'Total', fr: 2836, de: 3539 },
  },
} satisfies Tables
```

Conventions :

- **Les valeurs sont des nombres**, jamais des chaînes formatées : `11.3`, pas `'11,3'`. Le formatage français (virgule décimale, espace insécable fine pour les milliers, `−` U+2212 pour le moins) est appliqué au rendu par `lib/format.ts`. C'est ce qui rend les données réutilisables et vérifiables.
- **`null` = donnée absente**, rendue `—`. Ne jamais écrire `0` ni `'—'` dans les données.
- `emphasis: true` reproduit `tr.hi` de l'original, `total: true` reproduit `tr.tot`, `separator: true` reproduit `.sep`.
- `sources` est un tableau d'identifiants du registre. **Un tableau sans source ne compile pas** : `sources` est un `[SourceId, ...SourceId[]]`, donc un tableau vide est une erreur de type, et un identifiant inconnu aussi.
- `vintage` est obligatoire : c'est le millésime de la **donnée**, pas la date de publication.
- `satisfies Tables` plutôt qu'une annotation `: Tables` : les clés restent littérales, donc `<DataTable id="…">` n'accepte que les identifiants réellement présents dans le fichier.

### 6.1 Séries (graphiques)

```ts
export const series = {
  'depense-par-nature-1975-2024': {
    type: 'line',
    title: 'Dépense publique par nature, 1975-2024',
    subtitle: "En % du PIB. Sous l'axe, les mandats présidentiels ; hachures pendant les cohabitations.",
    caption: 'Une seule courbe monte. …',
    x: { label: 'année', type: 'year', values: [1975, 1976, /* … */ 2024] },
    y: { label: '% du PIB', min: 0, max: 30, ticks: 5 },
    series: [
      { key: 'prestations',   label: 'Prestations sociales',    color: 's1',
        values: [17.2, 17.1, /* … */ 25.5] },
      { key: 'remunerations', label: 'Rémunération des agents', color: 's4',
        values: [12.0, /* … */ 12.7] },
    ],
    annotations: {
      mandates: [{ label: "Giscard d'Estaing", from: 1975, to: 1981, bloc: 'd' }],
      cohabitations: [{ from: 1986, to: 1988 }],
    },
    sources: ['eurostat-nasa10nftr', 'eurostat-gov10amain'],
    caveat: "La ventilation COFOG par fonction n'existe pas avant 1995 ; seule la ventilation par nature remonte à 1975.",
    vintage: '2024',
  },
} satisfies SeriesSet
```

`type` ∈ `line` | `bar` | `stacked-bar` | `grouped-bar` | `slope` | `dot` — les formes réellement présentes dans l'original.

**Aucune coordonnée de pixel n'apparaît dans les données.** `lib/scales.ts` fait la conversion valeur → position au rendu, dans un module testé. C'est le changement le plus important de la refonte : il rend les 55 graphiques révisables et élimine une classe entière d'erreurs — jusqu'ici, un point mal placé était invisible.

### 6.2 Registre des sources — `src/data/sources.ts`

```ts
export const sources = {
  'eurostat-gov10aexp': {
    producer: 'Eurostat',
    kind: 'database',
    dataset: 'gov_10a_exp',
    title: 'Dépenses des administrations publiques par fonction (COFOG)',
    url: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/',
    accessed: '2026-08',
    theme: 'finances-publiques',
    engaged: false,
  },
  'ifrap-effectifs': {
    producer: 'IFRAP',
    kind: 'report',
    title: '…',
    url: '…',
    theme: 'efficacite-etat',
    engaged: true,
    engagedNote: 'Organisme engagé ; cité à défaut de source publique chiffrée.',
  },
} as const

export type SourceId = keyof typeof sources
```

`SourceId` étant dérivé du registre, **citer une source inexistante est une erreur de compilation**, pas un problème découvert à la relecture.

`engaged: true` déclenche automatiquement l'astérisque et la mention prévus par la méthodologie de l'original : la règle éditoriale devient une propriété de donnée, pas une vigilance humaine.

La page `/sources` est **générée** : elle liste les entrées effectivement référencées par les 21 `data.ts`, groupées par `theme`, et signale en erreur de build toute source orpheline (déclarée, jamais citée).

### 6.3 Auditabilité

L'objectif O3 se vérifie de trois façons, sans quitter le chapitre :

1. **Lecture.** Un `data.ts` contient l'intégralité des chiffres du chapitre, chacun sous un `sources` et un `vintage`. Une relecture éditoriale se fait sur ce seul fichier.
2. **Compilation.** `npm run build` refuse un chiffre tabulé sans source, une source inconnue, une ligne dont une clé n'existe pas dans `columns`.
3. **Audit.** `scripts/check-data.ts` produit `.artifacts/audit.json` : pour chaque chapitre, la liste des tableaux et séries, leurs sources, leurs millésimes, et les anomalies. C'est le fichier qu'on ouvre quand quelqu'un conteste un chiffre.

### 6.4 Validation

`src/lib/schemas.ts` définit les schémas Zod, exécutés au build sur chaque `data.ts`. Le build échoue si :

- un tableau ou une série n'a pas de `sources` non vide et de `vintage` ;
- un identifiant de source cité n'existe pas dans le registre ;
- une ligne de tableau a des clés absentes de `columns` ;
- une série a un nombre de `values` différent de la longueur de `x.values` ;
- une valeur numérique est fournie sous forme de chaîne ;
- un tableau ou une série déclaré dans `data.ts` n'est référencé par aucun `content.tsx` (donnée morte).

---

## 7. Composants (`src/components`)

Ils sont la garantie de mise en forme cohérente : **c'est le composant, pas le chapitre, qui décide du balisage et des classes CSS**. Les 21 chapitres n'écrivent jamais de `<table>`, de `<svg>` ni de `<div class="defn">`.

| Composant | Rôle | Remplace |
|---|---|---|
| `<Chapter meta={meta}>` | En-tête de section, chapeau, parties, pied de chapitre daté | `section.sec` + `h2` + `.sec-note` |
| `<Question id title verdict?>` | Fiche question/réponse | `div.q` + `h3` + `.verdict` |
| `<DataTable id="…" />` | Rend un tableau depuis le `data.ts` du chapitre | `div.tw > table` écrit à la main |
| `<Figure id="…" />` | Titre, sous-titre, légende, graphique, caption, source, tableau alternatif | `figure.fig` complet |
| `<LineChart>` `<BarChart>` … | SVG calculé depuis les valeurs | `<polyline points="…">` codé en dur |
| `<Definition>` `<Limit>` `<MissingData>` `<Takeaway>` | Encadrés | `.defn` `.lim` `.hole` `.take` |
| `<Source ids={[…]} />` | Bloc source formaté depuis le registre | `p.src` en texte libre |
| `<Verdict kind="ok\|nuance\|faux" />` | Pastille de verdict | `.verdict.v-ok` / `.v-nu` |
| `<Num>` | Nombre en tabular-nums, formaté FR | `span.num` |

**Résolution des données.** `<DataTable id="…" />` et `<Figure id="…" />` ne reçoivent pas d'objet de données : ils reçoivent un identifiant, résolu contre le `data.ts` du chapitre courant fourni par un contexte serveur posé par `<Chapter>`. Deux conséquences : le contenu reste lisible (`<DataTable id="regalien-pour-100k" />` et rien d'autre), et le type de `id` est restreint aux clés du `data.ts` de ce chapitre — se tromper d'identifiant ne compile pas.

**Base commune des graphiques.** Même `viewBox`, mêmes marges, même grille, même traitement des étiquettes de fin de courbe, même conteneur `.figscroll` pour le défilement horizontal sur mobile. Chaque SVG porte `role="img"` et un `<title>` — comme l'original, qui le fait déjà correctement.

**Composants serveur.** Tous, sauf les trois de `components/client/` (bascule de thème, scrollspy, recherche). Aucune donnée chiffrée n'est envoyée au navigateur : les tableaux et les SVG arrivent déjà rendus dans le HTML.

---

## 8. Rendu, styles, comportements

**Styles.** Le CSS de l'original est repris **verbatim** dans `src/styles/`, découpé en `tokens.css` (custom properties et les trois blocs de thème clair / `prefers-color-scheme: dark` / `data-theme`), `base.css` (typographie, grille `.shell`, rail, sections, fiches, tableaux, encadrés) et `print.css` (nouveau). Aucune valeur de couleur, de taille ou d'espacement n'est modifiée, aucun nom de classe n'est renommé. Import global unique dans `app/layout.tsx`.

**Polices.** `next/font/google` charge Newsreader, IBM Plex Sans et IBM Plex Mono avec les mêmes graisses et les mêmes axes que le `<link>` d'origine, en les auto-hébergeant : une dépendance réseau de moins, et pas de saut de rendu. À vérifier au moment de L1 : que le sous-ensemble `latin` retenu contient bien `−` (U+2212) et l'espace insécable fine utilisés par le formatage FR. Si un glyphe manque, on revient au `<link>` d'origine — la fidélité prime sur l'auto-hébergement. Pile de repli déclarée (Georgia, sans-serif système) dans tous les cas.

**Thème.** Le triptyque existant est conservé : palette claire sur `:root` nu, palette sombre sous `@media (prefers-color-scheme: dark)` gardée par `:root:not([data-theme="light"])`, et sous `:root[data-theme="dark"]`. On ajoute un bouton de bascule (`ThemeToggle`, client) qui écrit `data-theme` et le mémorise en `localStorage`, avec un script inline posé par `app/layout.tsx` avant le rendu pour éviter le flash au chargement.

**Sommaire et scrollspy.** Le rail liste les 21 chapitres depuis `chapters.ts` ; sur une page de chapitre, il liste les fiches de ce chapitre. Le scrollspy `IntersectionObserver` de l'original est repris tel quel dans `ScrollSpy`.

**Recherche.** Le champ de filtre actuel est local à la page. Il est remplacé par une recherche sur l'ensemble du dossier : `scripts/build-search-index.ts` écrit `public/search-index.json` (titre de fiche, chapitre, texte normalisé sans accents — la fonction `normalize` de l'original est réutilisée), chargé à la demande à la première frappe. Sans JS, le sommaire complet reste du HTML navigable.

**Page `/tout`.** Importe les 21 `content.tsx` et les concatène en une page unique — le fichier d'origine, reconstitué. Elle sert la lecture linéaire, l'impression et l'archivage, et c'est le meilleur test de non-régression visuelle (§12).

**Impression.** `print.css` masque le rail et les contrôles, force la palette claire, évite les coupures à l'intérieur d'un tableau ou d'une figure, et fait apparaître les URL des sources en note.

---

## 9. Accessibilité, performance, SEO

- **Toutes les routes sont prérendues au build.** Aucune page de lecture n'est rendue à la requête : pas de `dynamic = 'force-dynamic'`, pas de `cookies()` ni de `headers()` dans un chapitre. Sur Vercel, une page de chapitre est donc servie depuis le cache statique, exactement comme le ferait un export.
- Chaque page de chapitre pèse moins de 150 Ko de HTML et n'embarque **aucun JS de rendu** : tableaux, figures et encadrés sont rendus au build par des composants serveur.
- **Coût du choix Next.js, énoncé franchement.** Même sans composant client, l'App Router livre son runtime React et son routeur — de l'ordre de 90 à 110 Ko compressés. Le HTML est complet et la page se lit intégralement sans JavaScript, mais on ne tient pas la promesse « zéro JS » qu'aurait donnée un générateur statique pur. Budget fixé : **≤ 120 Ko de JS compressé** sur une page de chapitre, mesuré en intégration continue ; scrollspy, thème et recherche sont chargés dynamiquement, la recherche seulement à la première frappe.
- Contrastes vérifiés en clair et en sombre, y compris les cinq couleurs de série `--s1`…`--s5` et les couleurs d'encadré.
- Chaque graphique a un `<title>` et **expose ses données en tableau repliable** (`<details>`) rendu depuis le même objet de série. Une courbe SVG n'est pas lisible au lecteur d'écran ; le tableau l'est, et il ne coûte rien puisque les données existent déjà.
- Métadonnées Open Graph par chapitre via l'export `metadata` de chaque `page.tsx`, alimenté par `meta` du `data.ts`. `canonical`, `sitemap.ts`, flux RSS des mises à jour.
- Un `datePublished` / `dateModified` par chapitre, alimenté par `meta.updated`, affiché en pied de chapitre. Sur un dossier de chiffres, la fraîcheur est une information de premier ordre.

---

## 10. Cycle de mise à jour des données

L'ingestion depuis les API (Eurostat, OCDE, Banque mondiale, data.gouv.fr) reste **manuelle et hors build** : le site doit pouvoir être reconstruit à l'identique dans cinq ans, même si une API a changé.

1. Un script d'ingestion (`scripts/fetch/<source>.ts`) interroge l'API et écrit un instantané brut dans `src/data/_raw/` (versionné).
2. Un script de transformation produit l'objet de série ou de tableau attendu, inséré dans le `data.ts` du chapitre concerné.
3. Le diff est relu humainement avant commit — c'est là que se voient les révisions de série et les ruptures de méthode. Un chapitre = un fichier de données = un diff lisible.

Chaque donnée porte `vintage` (millésime de la donnée) ; le registre porte `accessed` (date d'interrogation). Les deux sont distincts et tous deux nécessaires.

---

## 11. Migration depuis le fichier existant

L'extraction est semi-automatique. `scripts/extract.ts` (Node + `node-html-parser`) produit, pour chacun des 21 chapitres, le triplet `page.tsx` / `content.tsx` / `data.ts` :

1. **Découpe** le HTML en 22 sections et, dans chacune, en fiches `div.q` → un `content.tsx` par chapitre, où chaque fiche devient un `<Question>`.
2. **Convertit les 286 tableaux** en entrées de `tables` : les en-têtes deviennent `columns`, les `td.n` sont parsés en nombres (virgule décimale, espaces insécables, `−`, `%`, `€`, `Md€` reconnus), `tr.hi` / `tr.tot` deviennent des drapeaux. Le `<table>` du contenu est remplacé par `<DataTable id="…" />`. La structure est régulière : taux d'automatisation attendu élevé.
3. **Extrait les 197 blocs `p.src`** en un registre provisoire, dédupliqué par URL puis par producteur + jeu de données, et rattache les identifiants obtenus au tableau ou à la figure voisins. C'est l'étape qui demande le plus de relecture humaine, les libellés variant d'une occurrence à l'autre.
4. **Reprend les 55 graphiques à la main.** Les coordonnées SVG ne permettent pas de retrouver les valeurs de façon fiable : l'inversion d'échelle donne des approximations, et toutes les échelles ne sont pas documentées. Chaque figure est refaite à partir de la source citée dans son `p.src`. C'est le poste le plus lourd de la migration, et le plus utile : c'est lui qui transforme des images en données.
5. `scripts/check-data.ts` audite l'ensemble : sources orphelines et fantômes, millésimes manquants, tableaux sans unité, données déclarées mais jamais affichées, valeurs aberrantes (part hors [0, 100], année hors [1945, 2030]).

**Ordre de migration.** Un chapitre pilote d'abord — `logement` (10 fiches, 5 tableaux, 2 figures) valide toute la chaîne sur un volume tenable. Puis `depenses-publiques` et `emploi-chomage`, les deux plus gros, qui exerceront tous les cas limites, dont le passage de `data.ts` à `data/`. Puis le reste par poids décroissant. La bibliographie bascule en dernier, une fois le registre stabilisé.

---

## 12. Critères d'acceptation

1. `npm run build` passe sans avertissement et échoue si une donnée viole un schéma ; la sortie du build montre les 21 chapitres, `/`, `/sources` et `/tout` marqués comme prérendus statiquement, aucun en rendu dynamique.
2. **Les 21 chapitres ont chacun leur répertoire** sous `src/app/(chapitres)/`, contenant `page.tsx`, `content.tsx` et `data.ts` (ou `data/index.ts` pour les deux plus gros) — vérifié par un test de structure.
3. Aucun nombre destiné à un tableau ou un graphique ne subsiste dans un `content.tsx` ou dans `src/components`.
4. Les 21 chapitres sont accessibles à `/<slug>`, `/sources` liste la bibliographie, et `/tout` reconstitue le document intégral.
5. **Non-régression visuelle** : capture Playwright de `/tout` comparée à celle du fichier d'origine, en clair et en sombre, aux largeurs 1440 / 768 / 390 px. Écart toléré : bruit de rendu des polices uniquement.
6. La page `/sources` est générée ; zéro source orpheline ou fantôme.
7. Chaque tableau et chaque série porte au moins une source et un millésime — garanti par le typage, revérifié par `check-data.ts` en intégration continue, et restitué dans `.artifacts/audit.json`.
8. Chaque figure expose ses données en tableau alternatif.
9. Les pages de lecture sont entièrement lisibles sans JavaScript, sommaire et navigation compris ; le JS embarqué d'une page de chapitre reste sous 120 Ko compressés.
10. Lighthouse ≥ 95 sur les quatre axes pour une page de chapitre.
11. Ajouter une ligne à un tableau ou une année à une série se fait en éditant **un seul fichier**, le `data.ts` du chapitre, sans toucher au balisage ni à une coordonnée.

---

## 13. Découpage du travail

| Lot | Contenu | Livrable vérifiable |
|---|---|---|
| **L1** | Squelette Next.js, déploiement Vercel, styles repris, `layout.tsx`, rail, polices, thème | Une page au rendu identique à l'original, en ligne sur une URL de prévisualisation |
| **L2** | `types.ts`, schémas Zod, `format.ts`, `scales.ts`, `DataTable`, `Source`, `sources.ts` | Tests Vitest verts sur le formatage FR et les échelles |
| **L3** | Composants de graphique (6 types) + tableau alternatif + `Chapter`, `Question` | Les 5 figures de `synthese` reproduites depuis des données |
| **L4** | `extract.ts` + chapitre pilote `logement` | Chapitre pilote conforme au critère 5 |
| **L5** | Migration des 20 chapitres restants | Site complet, critères 2 et 3 |
| **L6** | Registre des sources, page `/sources`, `check-data.ts`, `audit.json` | Critères 6 et 7 |
| **L7** | Recherche transverse, `/tout`, impression, SEO, RSS, budget JS | Critères 4, 9, 10 |

L1 à L3 sont séquentiels. À partir de L5, les chapitres sont indépendants et parallélisables — c'est précisément ce que permet le découpage en 21 répertoires autonomes.

---

## 14. Points ouverts

- **Attribution éditoriale.** Le document est signé « Note de synthèse · août 2026 » sans auteur. Un site public gagnerait une page « qui écrit ceci, avec quels moyens, comment signaler une erreur ». À trancher avant publication.
- **Correction publique des erreurs.** Sur un dossier factuel destiné à une campagne, un journal des corrections daté est un actif, pas une charge. Proposition : une entrée `corrections[]` dans le `meta` de chaque `data.ts` et un encadré en pied de chapitre.
- **Licence et export des données.** L'architecture proposée permet de publier un CSV téléchargeable par tableau et par figure pour presque rien, généré depuis les mêmes objets. Reste à décider de la licence.
- **Statut du chapitre `perception-realite`.** L'original s'annonce lui-même partiel sur ce point ; `meta.status: 'partiel'` le dit dans le site. À confirmer avec l'auteur.
- **Nom de domaine** : non tranché. L'hébergement l'est : Vercel.
