# CLAUDE.md

Consignes de travail pour ce dépôt. À lire avant toute modification.

## Le projet

**Chiffres pour 2027** — un dossier factuel sur l'état de la France, organisé en
21 chapitres : 18 thèmes, plus une synthèse, une grille de lecture des promesses
électorales et le dossier expliqué simplement.

Le point de départ est `Temp/chiffres2027 (3).html`, un document HTML monolithe
de 1,1 Mo. Le projet consiste à le reconstruire en site Next.js **au rendu
strictement identique**, en séparant les données de la présentation.

**La spécification fait autorité : `specs/site-chiffres-2027.md`.** Elle décrit
l'arborescence, le modèle de données, les composants et les critères
d'acceptation. En cas de doute sur une décision d'architecture, c'est elle qu'il
faut lire, et c'est elle qu'il faut mettre à jour si la décision change.

**`specs/DECISIONS.md` dit ce qui a été fait quand la réalité du document
d'origine ne correspondait pas au plan** — et pourquoi. À lire avant de
s'étonner d'un choix : les écarts à la spec y sont justifiés et chiffrés.

## Git

- **On travaille directement sur `main`.** Pas de branche de fonctionnalité, pas
  de pull request, sauf demande explicite.
- Commits en français, sujet à l'impératif ou au nominal, préfixé par la zone
  touchée (`spec:`, `data:`, `chapitre:`, `composants:`, `build:`).
- Un commit = un changement cohérent. Une migration de chapitre est un commit ;
  une mise à jour de millésime en est un autre.
- Ne jamais réécrire l'historique de `main`.

## Commandes

| Commande | Ce qu'elle fait |
|---|---|
| `npm run dev` | serveur de développement |
| `npm run verify` | **la chaîne complète** : types, tests, audit des données, build, non-régression de rendu |
| `npm run extract` | régénère les 21 chapitres depuis `Temp/chiffres2027 (3).html` |
| `npm run check:data` | audit des données ; écrit `.artifacts/audit.json` |
| `npm run check:render` | compare `/tout` au document d'origine, élément par élément |
| `npm run check:bundle` | poids du JavaScript par page de chapitre |
| `npm run export:html` | exporte le dossier en un fichier HTML autonome |
| `npm run export:md` | exporte le dossier en Markdown, figures SVG comprises |
| `npm test` | tests unitaires (formatage FR, échelles, graphiques) |

**Avant de pousser : `npm run verify`.** C'est cette commande qui protège la
garantie centrale du projet — un rendu identique au document d'origine.

## Stack

Next.js 16 (App Router) · TypeScript · CSS natif · Vitest.
Hébergement et déploiement : **Vercel**.

- **Ne pas utiliser `output: 'export'`.** Le site est déployé sur Vercel avec un
  build Next.js standard.
- Toutes les routes doivent rester **prérendues au build**. Pas de
  `dynamic = 'force-dynamic'`, pas de `cookies()` ni de `headers()` dans une page
  de lecture. Si un changement rend une route dynamique, c'est une régression.

## Règles d'architecture

Ces règles ne sont pas des préférences de style : chacune protège un critère
d'acceptation de la spec.

1. **Un répertoire par chapitre**, sous `src/app/(chapitres)/<slug>/`, contenant
   exactement `page.tsx`, `content.tsx` et `data.ts`. Les 21 répertoires ont la
   même forme, y compris ceux qui n'ont aucun tableau : leur `data.ts` existe et
   exporte des registres vides.
2. **Aucun chiffre dans `content.tsx` ni dans `src/components`**, hors nombre
   cité dans une phrase rédigée. Tout ce qui est tabulé ou tracé vient du
   `data.ts` voisin.
3. **Aucune coordonnée de pixel dans les données.** Les séries portent des
   valeurs ; `src/lib/scales.ts` calcule les positions au rendu.
4. **Chaque tableau et chaque série porte `sources` et `vintage`.** `sources`
   est non vide et ses identifiants viennent du registre `src/data/sources.ts` —
   le typage doit rendre toute autre écriture non compilable.
5. **La mise en forme appartient aux composants.** Un chapitre n'écrit jamais de
   `<table>`, de `<svg>` ni de `<div className="defn">` : il appelle
   `<DataTable>`, `<Figure>`, `<Definition>` et les autres. Un besoin de mise en
   forme nouveau se règle en étendant un composant partagé, jamais en écrivant
   du balisage dans un chapitre.
6. **Le balisage des chapitres est figé ; le reste du site est libre.** La
   distinction est mécanique, pas doctrinale : `check:render` compare la chaîne
   HTML de `/tout` au document d'origine **attributs compris**, et la
   comparaison démarre à `<main class="main">`. Concrètement :
   - **dans ce que rend `/tout`** — les 21 `content.tsx` et les composants
     qu'ils appellent — le CSS d'origine reste repris verbatim, noms de classes
     compris. Une classe ajoutée à un élément existant fait échouer la
     vérification. Ce n'est pas une préférence, c'est le prix de la garantie ;
   - **partout ailleurs** — routes nouvelles, sommaire, rail, masthead,
     `/sources`, et les blocs ajoutés en `mode="page"` — **Tailwind, les CSS
     Modules et le CSS-in-JS sont autorisés**, au même titre que le CSS natif.
     Choisir l'outil qui convient à la surface qu'on construit.

   Une seule contrainte demeure des deux côtés : **dans le corps du dossier**,
   les couleurs passent par les jetons de `src/styles/tokens.css` (`--ink`,
   `--surface`, `--accent`, `--s1`…) et non par des valeurs en dur — c'est ce
   qui permet à `src/styles/charte-2027.css` de reteinter tout le dossier en
   redéfinissant une dizaine de variables sous `.a27-article`.

   **La charte du site est celle d'`Élections 2027`** (`charte-2027.css`,
   classes `a27-`) : grille suisse, aplats, typographie massive, palette en
   dur et locale à `.a27`. Elle habille toutes les routes. Elle est claire, et
   la bascule clair/sombre a été supprimée avec elle — voir `DECISIONS.md`
   §D18.
7. **Composants serveur par défaut.** `"use client"` est réservé à
   `src/components/client/` : bascule de thème, scrollspy, recherche. Un
   `"use client"` sur une page de lecture lui coûterait son prérendu.
8. **Les fichiers générés ne se modifient pas à la main.** `data.ts`,
   `content.tsx` et `page.tsx` des 21 chapitres, ainsi que `src/data/sources.ts`
   et `src/data/chapters.ts`, sont produits par `npm run extract`, qui **efface
   et réécrit tout le répertoire** : une saisie à la main disparaît à la
   régénération suivante. Un défaut d'extraction se corrige dans
   `scripts/extract.ts` ; un désaccord avec le **fond** du document d'origine
   passe par `scripts/amendments.ts` (règle 9). En-tête de fichier :
   « Généré par `npm run extract` ».
9. **Corriger un chiffre ou ajouter du contenu passe par
   `scripts/amendments.ts`**, le seul fichier non généré où le dossier s'écarte
   de son document d'origine. Il distingue deux régimes : une **correction**
   (valeur fausse au regard de sa source) s'applique partout, `/tout` compris,
   et doit être déclarée — `check:render` n'accepte que les substitutions
   déclarées, et échoue aussi si l'une d'elles n'est jamais rencontrée ; un
   **ajout** (contenu nouveau) est rendu en `mode="page"` seulement. Voir
   `DECISIONS.md` §D17.

## Simple, mais construit pour grandir

Le site restera un site web ordinaire : pas de base de données, pas
d'authentification, pas de CMS, pas de couche d'état. En même temps, le dossier
va grandir — chapitres, millésimes, figures.

La conséquence pratique : **la simplicité porte sur la machinerie, pas sur la
structure.** N'ajoutez pas d'abstraction « au cas où », mais ne prenez pas non
plus de raccourci qui casserait l'uniformité des 21 répertoires. Le test :
ajouter un 22ᵉ chapitre doit être un copier-coller de répertoire, et ajouter une
année à une série doit se faire en éditant un seul fichier.

## Rendu à l'identique

C'est la contrainte la plus facile à violer sans s'en apercevoir. Elle est
donc **vérifiée automatiquement** : `npm run check:render` compare le HTML
prérendu de `/tout` au document d'origine, élément par élément. Aujourd'hui :
60 756 éléments, 29 corrections déclarées, aucun écart non déclaré.

Ce que ça implique au quotidien :

- **si `check:render` passe au rouge, c'est une régression**, pas un réglage
  du script. Corriger le rendu, pas la mesure. La seule exception est une
  correction de fond assumée, qui se déclare dans `scripts/amendments.ts` et
  se justifie dans `DECISIONS.md` — jamais en élargissant la tolérance ;
- le formatage français passe par `src/lib/format.ts` et seulement par lui :
  virgule décimale, espace ordinaire pour les milliers dans les tableaux,
  **espace fine insécable (U+202F) dans les SVG**, `−` (U+2212) pour le signe
  moins, `—` pour une donnée absente ;
- les positions de graphique passent par `src/lib/scales.ts`, qui reproduit
  l'**arrondi au pair le plus proche** du générateur d'origine. Un
  `Math.round` ordinaire décale une étiquette sur deux ;
- ne jamais « améliorer » une formulation, un espacement ou une couleur au
  passage. La refonte est structurelle, pas graphique. Une amélioration
  graphique se discute d'abord et se note dans la spec.

**Deux modes de rendu.** Les pages de chapitre (`mode="page"`) ajoutent le pied
de chapitre daté et le tableau de données replié sous les figures ; `/tout`
(`mode="verbatim"`) n'ajoute rien, pour rester comparable. Tout ajout visuel
doit être conditionné au mode, sinon il casse la vérification.

## Ajouter ou corriger

- **Ajouter du contenu rédactionnel** : l'écrire dans
  `Temp/chiffres2027 (3).html`, au balisage du document, puis `npm run extract`
  et `npm run verify`. **C'est la voie normale** : le document d'origine est la
  surface d'écriture, les chapitres en sont la traduction, et le contenu
  apparaît aussi sur `/tout`. Voir `DECISIONS.md` §D14.
- **Corriger un chiffre faux** : déclarer la correction dans
  `scripts/amendments.ts` — avec `was`, le texte que rend le document
  d'origine — puis `npm run extract` et `npm run verify`. Ne jamais éditer un
  `data.ts` : il sera réécrit.
- **Ajouter un commentaire *sur* le document** — un encadré qui signale une
  correction, une partie, une figure de lecture : `scripts/amendments.ts`,
  section des ajouts, puis `npm run extract`. Le contenu n'apparaît que sur la
  page de chapitre, jamais sur `/tout`. À réserver à ce qui n'a pas sa place
  dans le document d'origine ; pour du contenu rédactionnel ordinaire, la voie
  ci-dessus est meilleure.
- **Ajouter un chapitre** : l'inscrire dans `CHAPTERS` en tête de
  `scripts/extract.ts`, puis régénérer.
- **Ajouter une figure** : `addedFigures` dans `scripts/amendments.ts`. Elle
  s'écrit **en valeurs**, jamais en pixels — `src/lib/chart.ts` la trace, seules
  les constantes de `layout` et `frame` sont saisies.
- **Ajouter une mise en forme** : étendre un composant partagé. Jamais de
  balisage dans un `content.tsx`.
- **Corriger un défaut d'extraction** : corriger `scripts/extract.ts`, lancer
  `npm run extract`, relire le diff, `npm run verify`.

## État actuel

Le site est construit et vérifié : 21 chapitres, 320 tableaux, 58 figures,
217 sources, 28 routes prérendues, toutes sous la charte (§D18). `/tout` rend 60 756 éléments avec
**29 corrections déclarées et aucun écart non déclaré**. Le JavaScript par page
est de 170 Ko pour 120 visés : dette mesurée, expliquée et cliquetée
(`DECISIONS.md` §D11).

Deux voies coexistent pour faire évoluer le fond. Le contenu rédactionnel
s'écrit dans le document d'origine (`DECISIONS.md` §D14) ; les corrections de
valeurs fausses et les commentaires qui ne doivent pas entrer dans `/tout`
passent par les amendements (`DECISIONS.md` §D17).

Ce qui reste ouvert est listé et chiffré dans `specs/DECISIONS.md` §D10 :
URL des sources (10 renseignées sur 212), millésimes à confirmer, 26 figures dont le tracé n'est pas
encore régénéré, un axe incohérent du document d'origine à arbitrer, un
commentaire éditorial à réécrire après correction, les autres tableaux
jamais confrontés à leur source, et les captures Playwright clair/sombre.
