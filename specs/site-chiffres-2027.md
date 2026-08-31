# Spécification — Site « Chiffres pour 2027 »

Statut : proposition · Date : 2026-08-31
Source de référence : `Temp/chiffres2027 (3).html` (1,1 Mo, 8 721 lignes, monolithe autonome)

---

## 1. Point de départ

Le fichier existant est un document HTML unique, sans dépendance autre que Google Fonts, qui contient :

| Élément | Volume |
|---|---|
| Chapitres (`section.sec`) | 22 (synthèse + 20 thèmes + bibliographie) |
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

**O1 — Séparer les données du rendu.** Toute valeur affichée dans un tableau ou un graphique vit dans `./src/data`, dans un fichier lisible et diffable, jamais dans le balisage.

**O2 — Organiser par chapitre.** Un chapitre = un fichier de contenu + un dossier de données + une page. Un contributeur peut travailler sur « Logement » sans ouvrir « Énergie ».

**O3 — Rendre chaque chiffre traçable.** Chaque tableau et chaque série porte un identifiant de source résolu depuis un registre unique ; la bibliographie est **générée**, jamais recopiée.

**O4 — Conserver le rendu à l'identique.** La refonte est structurelle, pas graphique. Le site livré doit être visuellement indiscernable de l'original sur les pages migrées.

**O5 — Rester statique et léger.** Pas de serveur, pas de base de données, pas de framework client sur les pages de lecture. Hébergement sur n'importe quel service de fichiers statiques.

### Non-objectifs

- Pas de CMS, pas d'authentification, pas de commentaires.
- Pas de collecte automatique des API statistiques au build : les données sont figées et versionnées, l'ingestion est un script manuel (§10).
- Pas de refonte éditoriale du texte : le contenu rédactionnel est repris tel quel.

---

## 3. Stack

| Choix | Motivation |
|---|---|
| **Astro 5** + TypeScript | HTML statique, zéro JS par défaut, îlots pour les seuls comportements interactifs. Content Layer natif, adapté à un site organisé par chapitre. |
| **MDX** pour le contenu | Le texte reste du texte ; les tableaux et figures deviennent des composants qui lisent `src/data`. |
| **Zod** | Validation des schémas au build : un tableau sans source ou une série mal formée casse la compilation, pas la publication. |
| **CSS natif** (custom properties) | Le CSS existant est déjà bon et tient en 292 lignes. On le reprend, on ne le remplace pas par un framework. |
| **Vitest** | Tests des utilitaires d'échelle des graphiques, du formatage FR et des invariants de données. |

Alternative écartée : générer le HTML statique avec un script Node maison. Moins d'outillage, mais il faut réécrire le routage, le rechargement à chaud et la validation. Astro les fournit et n'impose rien au client.

---

## 4. Arborescence

```
France2027/
├─ specs/
│  └─ site-chiffres-2027.md            ← ce document
├─ src/
│  ├─ data/                            ← TOUTES les données chiffrées
│  │  ├─ sources.json                  ← registre unique des sources
│  │  ├─ chapters.json                 ← ordre, titres, slugs, chapeaux
│  │  ├─ 00-synthese/
│  │  │  ├─ tables/
│  │  │  │  └─ regalien-pour-100k.json
│  │  │  └─ series/
│  │  │     ├─ depense-par-nature-1975-2024.json
│  │  │     └─ pib-trois-mesures.json
│  │  ├─ 01-depenses-publiques/
│  │  │  ├─ tables/…      (44 tableaux)
│  │  │  └─ series/…      (15 figures)
│  │  ├─ 02-dette-deficit/
│  │  ├─ …
│  │  └─ 20-explique-simplement/
│  ├─ content/                         ← texte rédactionnel, un fichier par chapitre
│  │  ├─ 00-synthese.mdx
│  │  ├─ 01-depenses-publiques.mdx
│  │  └─ …
│  ├─ components/
│  │  ├─ DataTable.astro
│  │  ├─ Figure.astro
│  │  ├─ charts/{LineChart,BarChart,StackedBar,GroupedBar,Slope}.astro
│  │  ├─ callouts/{Definition,Limit,MissingData,Takeaway}.astro
│  │  ├─ Source.astro
│  │  ├─ Question.astro
│  │  └─ Verdict.astro
│  ├─ layouts/ChapterLayout.astro
│  ├─ lib/
│  │  ├─ schemas.ts                    ← schémas Zod
│  │  ├─ scales.ts                     ← valeurs → coordonnées SVG
│  │  ├─ format.ts                     ← nombres, %, €, espaces insécables
│  │  └─ sources.ts                    ← résolution des identifiants de source
│  ├─ pages/
│  │  ├─ index.astro                   ← accueil + sommaire + méthodologie
│  │  ├─ [chapitre].astro              ← une page par chapitre
│  │  ├─ sources.astro                 ← bibliographie générée
│  │  └─ tout.astro                    ← document intégral, imprimable
│  └─ styles/{tokens,base,print}.css
├─ scripts/
│  ├─ extract.ts                       ← extraction depuis le HTML d'origine
│  └─ check-data.ts                    ← audit de cohérence
└─ public/
```

**Règle d'or :** aucun nombre dans `src/content` ni dans `src/components`, hors nombres cités dans une phrase rédigée. Tout ce qui est tabulé ou tracé vient de `src/data`.

---

## 5. Découpage par chapitre

L'ordre et les intitulés du sommaire actuel sont conservés à l'identique.

| Slug | Titre | Fiches | Tableaux | Figures |
|---|---|---:|---:|---:|
| `00-synthese` | Synthèse et commentaire | 4 | 1 | 5 |
| `01-depenses-publiques` | Dépenses publiques, impôts, redistribution | 26 | 44 | 15 |
| `02-dette-deficit` | Dette et déficit | 9 | 11 | 2 |
| `03-retraites-travail` | Retraites et durée de travail | 10 | 8 | 1 |
| `04-emploi-chomage` | Emploi, chômage et coût du travail | 23 | 55 | 10 |
| `05-industrie` | Industrie et désindustrialisation | 13 | 24 | 4 |
| `06-commerce-exterieur` | Commerce extérieur et flux financiers | 12 | 23 | 0 |
| `07-immigration` | Immigration et intégration | 8 | 14 | 1 |
| `08-ecologie-climat` | Écologie et climat | 12 | 9 | 7 |
| `09-energie` | Énergie | 6 | 6 | 0 |
| `10-europe` | Europe | 7 | 3 | 0 |
| `11-sante` | Santé | 5 | 6 | 0 |
| `12-securite-justice` | Sécurité, justice, prisons | 13 | 16 | 1 |
| `13-logement` | Logement | 10 | 5 | 2 |
| `14-education` | Éducation et mobilité sociale | 9 | 22 | 2 |
| `15-niveau-de-vie` | Niveau de vie, patrimoine, inégalités | 12 | 27 | 4 |
| `16-efficacite-etat` | Efficacité de l'État | 7 | 5 | 1 |
| `17-demographie` | Démographie et avenir | 3 | 0 | 0 |
| `18-perception-realite` | Perception contre réalité | 4 | 6 | 0 |
| `19-grille-promesses` | Grille de lecture des promesses | 3 | 0 | 0 |
| `20-explique-simplement` | Le dossier expliqué simplement | 5 | 1 | 0 |
| `99-sources` | Toutes les sources | — | généré | — |

Le chapitre 04 comporte déjà deux parties (`.part`) ; le modèle de contenu doit les porter (`parts: [{ label, title }]`), sans quoi le découpage de la page est faux.

`chapters.json` porte, par chapitre : `slug`, `num`, `title`, `shortTitle` (pour le rail), `note` (le chapeau `.sec-note`), `status` (`complete` | `partiel`), `updated`. Le chapitre 18 est déclaré `partiel` — l'original l'annonce lui-même, le site doit le dire aussi.

---

## 6. Modèle de données (`./src/data`)

### 6.1 Tableau — `src/data/<chapitre>/tables/<id>.json`

```jsonc
{
  "id": "regalien-pour-100k",
  "title": "Effectifs régaliens et sociaux, pour 100 000 habitants",
  "unit": "pour 100 000 habitants",
  "vintage": "2022",
  "sources": ["cepej-2022", "ocde-sante-2023"],
  "note": "Les juges professionnels excluent les juges de proximité.",
  "columns": [
    { "key": "label",  "header": "Pour 100 000 habitants", "type": "text" },
    { "key": "fr",     "header": "France",             "type": "number", "decimals": 1 },
    { "key": "de",     "header": "Allemagne",          "type": "number", "decimals": 1 },
    { "key": "median", "header": "Médiane européenne", "type": "number", "decimals": 1 },
    { "key": "gap",    "header": "Écart",              "type": "text" }
  ],
  "rows": [
    { "label": "Juges professionnels", "fr": 11.3, "de": 24.7, "median": 17.6,
      "gap": "−54 % vs Allemagne", "emphasis": true },
    { "label": "Médecins", "fr": 328, "de": 453, "median": null, "gap": "−28 %" }
  ],
  "footer": { "label": "Total", "fr": 2836, "de": 3539 }
}
```

Conventions :

- **Les valeurs sont des nombres**, jamais des chaînes formatées : `11.3`, pas `"11,3"`. Le formatage français (virgule décimale, espace insécable fine pour les milliers, `−` U+2212 pour le moins) est appliqué au rendu par `lib/format.ts`. C'est ce qui rend les données réutilisables et vérifiables.
- **`null` = donnée absente**, rendue `—`. Ne jamais écrire `0` ni `"—"` dans les données.
- `emphasis: true` reproduit `tr.hi` de l'original, `total: true` reproduit `tr.tot`, `separator: true` reproduit `.sep`.
- `sources` est un tableau d'identifiants résolus depuis `sources.json`. **Un tableau sans source ne compile pas.**
- `vintage` est obligatoire : c'est le millésime de la donnée, pas la date de publication.

### 6.2 Série (graphiques) — `src/data/<chapitre>/series/<id>.json`

```jsonc
{
  "id": "depense-par-nature-1975-2024",
  "type": "line",
  "title": "Dépense publique par nature, 1975-2024",
  "subtitle": "En % du PIB. Sous l'axe, les mandats présidentiels ; hachures pendant les cohabitations.",
  "caption": "Une seule courbe monte. …",
  "x": { "label": "année", "type": "year", "values": [1975, 1976, "…", 2024] },
  "y": { "label": "% du PIB", "min": 0, "max": 30, "ticks": 5 },
  "series": [
    { "key": "prestations",  "label": "Prestations sociales",     "color": "s1",
      "values": [17.2, 17.1, "…", 25.5] },
    { "key": "remunerations","label": "Rémunération des agents",  "color": "s4",
      "values": [12.0, "…", 12.7] }
  ],
  "annotations": {
    "mandates": [ { "label": "Giscard d'Estaing", "from": 1975, "to": 1981, "bloc": "d" } ],
    "cohabitations": [ { "from": 1986, "to": 1988 } ]
  },
  "sources": ["eurostat-nasa10nftr", "eurostat-gov10amain"],
  "caveat": "La ventilation COFOG par fonction n'existe pas avant 1995 ; seule la ventilation par nature remonte à 1975.",
  "vintage": "2024"
}
```

`type` ∈ `line` | `bar` | `stacked-bar` | `grouped-bar` | `slope` | `dot` — les formes réellement présentes dans l'original.

**Aucune coordonnée de pixel n'apparaît dans les données.** `lib/scales.ts` fait la conversion valeur → position au rendu, dans un module testé. C'est le changement le plus important de la refonte : il rend les 55 graphiques révisables et élimine une classe entière d'erreurs — jusqu'ici, un point mal placé était invisible.

### 6.3 Registre des sources — `src/data/sources.json`

```jsonc
{
  "eurostat-gov10aexp": {
    "producer": "Eurostat",
    "kind": "database",
    "dataset": "gov_10a_exp",
    "title": "Dépenses des administrations publiques par fonction (COFOG)",
    "url": "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/",
    "accessed": "2026-08",
    "theme": "finances-publiques",
    "engaged": false
  },
  "ifrap-effectifs": {
    "producer": "IFRAP",
    "kind": "report",
    "title": "…",
    "url": "…",
    "theme": "efficacite-etat",
    "engaged": true,
    "engagedNote": "Organisme engagé ; cité à défaut de source publique chiffrée."
  }
}
```

`engaged: true` déclenche automatiquement l'astérisque et la mention prévus par la méthodologie de l'original : la règle éditoriale devient une propriété de donnée, pas une vigilance humaine.

La page `/sources` est **générée** : elle liste les entrées effectivement référencées, groupées par `theme`, et signale en erreur de build toute source orpheline (déclarée, jamais citée) ou fantôme (citée, non déclarée).

### 6.4 Validation

`src/lib/schemas.ts` définit les schémas Zod correspondants. Le build échoue si :

- un tableau ou une série n'a pas de `sources` non vide et de `vintage` ;
- un identifiant de source cité n'existe pas dans le registre ;
- une ligne de tableau a des clés absentes de `columns` ;
- une série a un nombre de `values` différent de la longueur de `x.values` ;
- une valeur numérique est fournie sous forme de chaîne.

---

## 7. Composants

| Composant | Rôle | Remplace |
|---|---|---|
| `<Question id title verdict?>` | Fiche question/réponse | `div.q` + `h3` + `.verdict` |
| `<DataTable id="…" />` | Rend un tableau depuis son JSON | `div.tw > table` écrit à la main |
| `<Figure id="…" />` | Titre, sous-titre, légende, graphique, caption, source | `figure.fig` complet |
| `<LineChart>` `<BarChart>` … | SVG calculé depuis les valeurs | `<polyline points="…">` codé en dur |
| `<Definition>` `<Limit>` `<MissingData>` `<Takeaway>` | Encadrés | `.defn` `.lim` `.hole` `.take` |
| `<Source ids={[…]} />` | Bloc source formaté depuis le registre | `p.src` en texte libre |
| `<Verdict kind="ok\|nuance\|faux" />` | Pastille de verdict | `.verdict.v-ok` / `.v-nu` |
| `<Num>` | Nombre en tabular-nums, formaté FR | `span.num` |

Les composants de graphique partagent une base commune : même `viewBox`, mêmes marges, même grille, même traitement des étiquettes de fin de courbe, même conteneur `.figscroll` pour le défilement horizontal sur mobile. Chaque SVG porte `role="img"` et un `<title>` — comme l'original, qui le fait déjà correctement.

---

## 8. Rendu, styles, comportements

**Styles.** Le CSS de l'original est repris dans `src/styles/`, découpé en `tokens.css` (custom properties et les trois blocs de thème clair / `prefers-color-scheme: dark` / `data-theme`), `base.css` (typographie, grille `.shell`, rail, sections, fiches, tableaux, encadrés) et `print.css` (nouveau). Aucune valeur de couleur, de taille ou d'espacement n'est modifiée.

**Thème.** Le triptyque existant est conservé : palette claire sur `:root` nu, palette sombre sous `@media (prefers-color-scheme: dark)` gardée par `:root:not([data-theme="light"])`, et sous `:root[data-theme="dark"]`. On ajoute un bouton de bascule qui écrit `data-theme` et le mémorise en `localStorage`, avec un script inline en `<head>` pour éviter le flash au chargement.

**Sommaire et scrollspy.** Le rail liste les 20 chapitres ; sur une page de chapitre, il liste les fiches de ce chapitre. Le scrollspy `IntersectionObserver` de l'original est repris tel quel.

**Recherche.** Le champ de filtre actuel est local à la page. Il est remplacé par une recherche sur l'ensemble du dossier : un index JSON (titre de fiche, chapitre, texte normalisé sans accents — la fonction `normalize` de l'original est réutilisée) construit au build, chargé à la demande à la première frappe. Sans JS, le sommaire complet reste du HTML navigable.

**Page `/tout`.** Concatène tous les chapitres en une page unique — le fichier d'origine, reconstitué. Elle sert la lecture linéaire, l'impression et l'archivage, et c'est le meilleur test de non-régression visuelle (§12).

**Impression.** `print.css` masque le rail et les contrôles, force la palette claire, évite les coupures à l'intérieur d'un tableau ou d'une figure, et fait apparaître les URL des sources en note.

---

## 9. Accessibilité, performance, SEO

- Chaque page de chapitre pèse moins de 150 Ko de HTML et n'embarque aucun JS de rendu ; scrollspy, thème et recherche sont des îlots chargés en `client:idle`.
- Polices Google conservées mais préchargées (`preconnect` déjà présent), avec pile de repli déclarée (Georgia, sans-serif système) pour rester lisible si le CDN est bloqué.
- Contrastes vérifiés en clair et en sombre, y compris les cinq couleurs de série `--s1`…`--s5` et les couleurs d'encadré.
- Chaque graphique a un `<title>` et **expose ses données en tableau repliable** (`<details>`) rendu depuis le même JSON. Une courbe SVG n'est pas lisible au lecteur d'écran ; le tableau l'est, et il ne coûte rien puisque les données existent déjà.
- Métadonnées Open Graph par chapitre, `canonical`, sitemap, flux RSS des mises à jour.
- Un `datePublished` / `dateModified` par chapitre, alimenté par `chapters.json`, affiché en pied de chapitre. Sur un dossier de chiffres, la fraîcheur est une information de premier ordre.

---

## 10. Cycle de mise à jour des données

L'ingestion depuis les API (Eurostat, OCDE, Banque mondiale, data.gouv.fr) reste **manuelle et hors build** : le site doit pouvoir être reconstruit à l'identique dans cinq ans, même si une API a changé.

1. Un script d'ingestion (`scripts/fetch/<source>.ts`) interroge l'API et écrit un instantané brut dans `src/data/_raw/` (versionné).
2. Un script de transformation produit le JSON de série ou de tableau attendu.
3. Le diff est relu humainement avant commit — c'est là que se voient les révisions de série et les ruptures de méthode.

Chaque fichier de données porte `vintage` (millésime de la donnée) ; le registre porte `accessed` (date d'interrogation). Les deux sont distincts et tous deux nécessaires.

---

## 11. Migration depuis le fichier existant

L'extraction est semi-automatique. `scripts/extract.ts` (Node + `node-html-parser`) :

1. **Découpe** le HTML en 22 chapitres et, dans chacun, en fiches `div.q` → un `.mdx` par chapitre.
2. **Convertit les 286 tableaux** en JSON : les en-têtes deviennent `columns`, les `td.n` sont parsés en nombres (virgule décimale, espaces insécables, `−`, `%`, `€`, `Md€` reconnus), `tr.hi` / `tr.tot` deviennent des drapeaux. Le `<table>` du MDX est remplacé par `<DataTable id="…" />`. La structure est régulière : taux d'automatisation attendu élevé.
3. **Extrait les 197 blocs `p.src`** en un registre provisoire, dédupliqué par URL puis par producteur + jeu de données. C'est l'étape qui demande le plus de relecture humaine, les libellés variant d'une occurrence à l'autre.
4. **Reprend les 55 graphiques à la main.** Les coordonnées SVG ne permettent pas de retrouver les valeurs de façon fiable : l'inversion d'échelle donne des approximations, et toutes les échelles ne sont pas documentées. Chaque figure est refaite à partir de la source citée dans son `p.src`. C'est le poste le plus lourd de la migration, et le plus utile : c'est lui qui transforme des images en données.
5. `scripts/check-data.ts` audite l'ensemble : sources orphelines et fantômes, millésimes manquants, tableaux sans unité, valeurs aberrantes (part hors [0, 100], année hors [1945, 2030]).

**Ordre de migration.** Un chapitre pilote d'abord — `13-logement` (10 fiches, 5 tableaux, 2 figures) valide toute la chaîne sur un volume tenable. Puis `01-depenses-publiques` et `04-emploi-chomage`, les deux plus gros, qui exerceront tous les cas limites. Puis le reste par poids décroissant. La bibliographie bascule en dernier, une fois le registre stabilisé.

---

## 12. Critères d'acceptation

1. `npm run build` produit un site statique sans avertissement, et échoue si une donnée viole un schéma.
2. Aucun nombre destiné à un tableau ou un graphique ne subsiste dans `src/content` ou `src/components`.
3. Les 22 chapitres sont accessibles à `/<slug>`, et `/tout` reconstitue le document intégral.
4. **Non-régression visuelle** : capture de `/tout` comparée à celle du fichier d'origine, en clair et en sombre, aux largeurs 1440 / 768 / 390 px. Écart toléré : bruit de rendu des polices uniquement.
5. La page `/sources` est générée ; zéro source orpheline ou fantôme.
6. Chaque tableau et chaque série porte au moins une source et un millésime — vérifié par `check-data.ts` en intégration continue.
7. Chaque figure expose ses données en tableau alternatif.
8. Les pages de lecture fonctionnent sans JavaScript, sommaire et navigation compris.
9. Lighthouse ≥ 95 sur les quatre axes pour une page de chapitre.
10. Ajouter une ligne à un tableau ou une année à une série se fait en éditant **un seul fichier JSON**, sans toucher au balisage ni à une coordonnée.

---

## 13. Découpage du travail

| Lot | Contenu | Livrable vérifiable |
|---|---|---|
| **L1** | Squelette Astro, styles repris, layout, rail, thème | Une page au rendu identique à l'original |
| **L2** | Schémas Zod, `format.ts`, `scales.ts`, `DataTable`, `Source` | Tests unitaires verts sur le formatage FR et les échelles |
| **L3** | Composants de graphique (5 types) + tableau alternatif | Les 5 figures de `00-synthese` reproduites depuis des données |
| **L4** | `extract.ts` + chapitre pilote `13-logement` | Chapitre pilote conforme au critère 4 |
| **L5** | Migration des 21 chapitres restants | Site complet |
| **L6** | Registre des sources, page `/sources`, `check-data.ts` | Critères 5 et 6 |
| **L7** | Recherche transverse, `/tout`, impression, SEO, RSS | Critères 3, 8, 9 |

L1 à L3 sont séquentiels. À partir de L5, les chapitres sont indépendants et parallélisables.

---

## 14. Points ouverts

- **Attribution éditoriale.** Le document est signé « Note de synthèse · août 2026 » sans auteur. Un site public gagnerait une page « qui écrit ceci, avec quels moyens, comment signaler une erreur ». À trancher avant publication.
- **Correction publique des erreurs.** Sur un dossier factuel destiné à une campagne, un journal des corrections daté est un actif, pas une charge. Proposition : une entrée `corrections[]` dans `chapters.json` et un encadré en pied de chapitre.
- **Licence et export des données.** L'architecture proposée permet de publier un CSV téléchargeable par tableau et par figure pour presque rien. Reste à décider de la licence.
- **Nom de domaine et hébergement** : non tranchés.
