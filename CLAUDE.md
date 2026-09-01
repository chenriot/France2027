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
6. **Le CSS d'origine est repris verbatim**, noms de classes compris. Ni
   Tailwind, ni CSS Modules, ni CSS-in-JS. Renommer une classe est une
   régression visuelle potentielle pour zéro bénéfice.
7. **Composants serveur par défaut.** `"use client"` est réservé à
   `src/components/client/` : bascule de thème, scrollspy, recherche. Un
   `"use client"` sur une page de lecture lui coûterait son prérendu.
8. **Les fichiers générés ne se modifient pas à la main.** `data.ts`,
   `content.tsx` et `page.tsx` des 21 chapitres, ainsi que `src/data/sources.ts`
   et `src/data/chapters.ts`, sont produits par `npm run extract`. Une
   correction se fait dans `scripts/extract.ts`, puis on régénère. En-tête de
   fichier : « Généré par `npm run extract` ».

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
57 724 éléments, aucun écart.

Ce que ça implique au quotidien :

- **si `check:render` passe au rouge, c'est une régression**, pas un réglage
  du script. Corriger le rendu, pas la mesure ;
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

- **Corriger un chiffre** : éditer le `data.ts` du chapitre, puis
  `npm run verify`. Un seul fichier, jamais de balisage.
- **Ajouter un chapitre** : copier un répertoire existant, l'inscrire dans
  `src/data/chapters.ts` et `src/data/all.ts`. Rien d'autre.
- **Ajouter une mise en forme** : étendre un composant partagé. Jamais de
  balisage dans un `content.tsx`.
- **Régénérer depuis la source** : corriger `scripts/extract.ts`, lancer
  `npm run extract`, relire le diff, `npm run verify`.
- **Ajouter du contenu rédactionnel** : l'écrire dans
  `Temp/chiffres2027 (3).html`, au balisage du document, puis `npm run extract`
  et `npm run verify`. Le document d'origine est la surface d'écriture ; les
  chapitres en sont la traduction. Voir `specs/DECISIONS.md` §D14.

## État actuel

Le site est construit et vérifié : 21 chapitres, 299 tableaux, 55 figures,
202 sources, rendu identique au document d'origine sur `/tout`, 25 routes
prérendues. Le JavaScript par page est de 170 Ko pour 120 visés : dette
mesurée, expliquée et cliquetée (`DECISIONS.md` §D11).

Ce qui reste ouvert est listé et chiffré dans `specs/DECISIONS.md` §D10 :
URL des sources (10 renseignées sur 202), 26 millésimes à confirmer, 26 figures dont le tracé n'est pas
encore régénéré, un axe incohérent du document d'origine à arbitrer, et les
captures Playwright clair/sombre.
