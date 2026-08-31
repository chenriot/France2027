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

## Git

- **On travaille directement sur `main`.** Pas de branche de fonctionnalité, pas
  de pull request, sauf demande explicite.
- Commits en français, sujet à l'impératif ou au nominal, préfixé par la zone
  touchée (`spec:`, `data:`, `chapitre:`, `composants:`, `build:`).
- Un commit = un changement cohérent. Une migration de chapitre est un commit ;
  une mise à jour de millésime en est un autre.
- Ne jamais réécrire l'historique de `main`.

## Stack

Next.js 15 (App Router) · TypeScript · CSS natif · Zod · Vitest · Playwright.
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
   `src/components/client/` : bascule de thème, scrollspy, recherche.

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

C'est la contrainte la plus facile à violer sans s'en apercevoir. Avant de
considérer un chapitre migré :

- comparer visuellement avec l'original, en thème clair **et** en thème sombre ;
- vérifier le formatage français : virgule décimale, espace insécable fine pour
  les milliers, `−` (U+2212) pour le signe moins, `—` pour une donnée absente ;
- ne jamais « améliorer » une formulation, un espacement ou une couleur au
  passage. La refonte est structurelle, pas graphique. Une amélioration
  graphique se discute d'abord et se note dans la spec.

## État actuel

Le dépôt ne contient pour l'instant que la spécification et le HTML source.
L'application Next.js n'est pas encore échafaudée : le premier lot (L1 de la
spec, §13) consiste à la créer. Mettre à jour cette section quand ce n'est plus
vrai.
