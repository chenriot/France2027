# Décisions de mise en œuvre

Journal des arbitrages pris pendant la construction du site, avec ce qui les a
motivés et ce qu'ils coûtent. La spécification (`site-chiffres-2027.md`) dit ce
qu'on veut ; ce document dit ce qu'on a fait quand la réalité du document
d'origine ne correspondait pas à ce qui était prévu.

Date : 2026-09-01 · État : première mise en œuvre complète, plus une fiche ajoutée (D11).

---

## Résultat mesuré

| Mesure | Valeur | Vérifiée par |
|---|---|---|
| Chapitres | 21 répertoires, `page.tsx` + `content.tsx` + `data.ts` | structure du dépôt |
| Tableaux migrés | 299 | `npm run check:data` |
| Cellules chiffrées typées en nombres | 4 165 sur 6 558 (64 %) | extraction |
| Figures | 29 régénérées et prouvées identiques · 22 valeurs lues, tracé d'origine conservé · 4 non converties | `npm run extract` |
| Sources | 211 blocs → **202 entrées**, 202 citées, **0 orpheline** | `npm run check:data` |
| **Rendu de `/tout`** | **identique au document d'origine, 57 752 éléments, aucun écart** | `npm run check:render` |
| JS par page | 170 Ko compressés — objectif 120 Ko non atteint (§D11) | `npm run check:bundle` |
| Routes prérendues | 25 sur 25 | `next build` |

---

## D1 — Les figures : régénérer et le prouver, plutôt que l'espérer

**Ce que prévoyait la spec** (§11.4) : reprendre les 55 graphiques à la main,
« les coordonnées SVG ne permettent pas de retrouver les valeurs de façon
fiable ».

**Ce qu'on a trouvé.** C'est faux pour ce document : chaque figure porte ses
graduations, avec leur valeur *et* leur position. L'échelle est donc
documentée, et l'inversion pixel → valeur est exacte, pas approximative. Les
graphiques en barres vont plus loin : leur valeur est écrite en toutes lettres
à côté de chaque barre.

**Décision.** Reconstituer les valeurs par calcul, et **prouver** le résultat
plutôt que l'affirmer. `src/lib/chart.ts` décrit un graphique sous forme de
primitives SVG ; les composants la transforment en JSX, et le script de
migration la sérialise pour la comparer, élément par élément, au SVG
d'origine. Composant et preuve partagent le même code : une figure n'est
déclarée « pilotée par les données » que si le SVG régénéré est identique.

**Trois classes de figures** en sortent, et l'audit les compte séparément :

1. **29 régénérées** — plus une seule coordonnée dans les données.
2. **22 dont les valeurs sont lues, tracé d'origine conservé** — le SVG
   contient un élément hors modèle (repère, ligne de rappel, mention). La
   figure est auditable et expose son tableau de données ; c'est encore le
   tracé d'origine qui s'affiche.
3. **4 non converties** — forme non reconnue, ou dérive supérieure à 0,6 px.

Dans les cas 2 et 3, le SVG conservé vit **dans `data.ts`**, jamais dans
`content.tsx` : la règle « aucun chiffre dans le contenu » tient sans
exception.

**Ce que ça a demandé.** Trois détails du générateur d'origine ont dû être
retrouvés pour atteindre l'identité au caractère près, et chacun est
documenté dans le code :

- l'**arrondi au pair le plus proche** (`roundHalfEven`) — 32,5 → 32 mais
  47,5 → 48. Sans lui, une étiquette de barre sur deux tombait à côté ;
- l'**espace fine insécable** (U+202F) dans les étiquettes de SVG, là où les
  tableaux utilisent une espace ordinaire ;
- le **calibrage des échelles**. Les positions de grille sont arrondies au
  dixième de pixel, ce qui ne détermine l'échelle qu'à 2 pour 10 000 près —
  assez pour faire basculer une largeur de 148,3 à 148,4. L'échelle est donc
  réajustée par régression sur l'ensemble des graduations et des largeurs.

---

## D2 — Anomalie trouvée dans le document d'origine

La figure **« Ce qui compose l'écart de taux d'emploi »** (chapitre Emploi)
porte un axe dont les graduations sont régulièrement espacées en pixels mais
étiquetées 0, 2, 5, 8. Les largeurs de barres, elles, sont cohérentes avec une
échelle 0 – 2,5 – 5 – 7,5. **L'axe affiché contredit les données tracées.**

La détection est automatique (`isLinear`) et la figure est laissée en tracé
d'origine plutôt que régénérée : on ne reproduit pas silencieusement un axe
faux. C'est exactement le genre d'erreur qu'un fichier de 8 721 lignes de
pixels rendait invisible, et le premier bénéfice concret de la refonte.

**À trancher** avec l'auteur : corriger l'axe, ou corriger les barres.

---

## D3 — Cellules : un nombre seulement si le rendu est prouvé identique

Les 5 247 cellules `.n` mélangent valeur et unité (`693,0 Md€`, `+27,4 %
pour l'Allemagne`), avec une unité qui change d'une cellule à l'autre, pas
d'une colonne à l'autre.

**Décision.** Une cellule devient `{ v: 693, d: 1, u: 'Md€' }` — un vrai
nombre — **si et seulement si** `formatNum` reproduit exactement la chaîne
d'origine. Sinon elle reste du texte. Le garde-fou est dans l'extracteur : il
n'y a pas de cas non prévu qui puisse dégrader le rendu, seulement des cas non
prévus qui restent en texte.

Résultat : 64 % des cellules chiffrées sont des nombres exploitables. Le reste
est surtout du texte comparatif (« +27,4 % pour l'Allemagne », « n.d. »,
« Aucune évaluation avec contrefactuel ») et des en-têtes.

**Limite assumée.** 36 % des cellules ne sont pas encore des nombres. Les
convertir suppose d'enrichir le modèle (intervalles, mentions, comparaisons),
ce qui se fera au fil de l'eau — le typage rend l'opération sûre.

---

## D4 — Registre des sources : le texte d'origine fait partie de la donnée

Le registre conserve, pour chaque source, la **formulation exacte** du bloc
`p.src` d'origine, en plus du producteur, des identifiants de jeux de données
et du drapeau « organisme engagé ».

C'est ce qui permet de tenir les deux objectifs à la fois : les 197 blocs
dupliqués deviennent 192 entrées uniques (la bibliographie est *dérivée*), et
le rendu ne bouge pas d'un caractère.

`SourceId` est l'union des clés du registre : **citer une source inexistante,
ou n'en citer aucune, est une erreur de compilation**, pas un oubli découvert
à la relecture.

**Limite assumée.** Les blocs d'origine ne contiennent pas d'URL. Le champ
`url` existe et reste vide : c'est le principal chantier documentaire ouvert.

---

## D5 — Pas de contexte React : une liaison typée en tête de contenu

**Prévu** (spec §7) : `<DataTable id="…" />` résout son identifiant via un
contexte serveur posé par `<Chapter>`.

**Impossible** : `createContext` n'existe pas dans les composants serveur, et
passer les pages de lecture en `"use client"` aurait coûté le prérendu.

**Décision.** Une fonction de liaison, appelée en tête de `content.tsx` :

```tsx
const { DataTable, Figure } = chapterComponents({ tables, series, mode })
```

Deux lignes de plus par chapitre, et un gain : le type de `id` est restreint
aux clés réellement présentes dans **ce** `data.ts`. Se tromper d'identifiant
ne compile pas — ce que le contexte n'aurait pas donné.

---

## D6 — Polices : on garde le `<link>` d'origine

**Prévu** (spec §8) : `next/font/google`, auto-hébergé.

**Abandonné.** `next/font` génère des noms de familles hachés, alors que le CSS
— repris verbatim, règle 6 — appelle `"IBM Plex Sans"`, `"Newsreader"` et
`"IBM Plex Mono"` par leur nom réel. Les faire coïncider supposait de modifier
le CSS, c'est-à-dire de renoncer à la garantie qui vaut le plus.

**Décision.** Le `<link>` d'origine, `preconnect` compris, est repris tel quel.
On garde une dépendance réseau ; on garde surtout un rendu identique.

**Réversible** : auto-héberger les fichiers de police et déclarer les
`@font-face` sous les mêmes noms, dans une feuille *séparée*, rendrait le CSS
d'origine toujours valable. À faire si la dépendance à Google Fonts devient un
problème.

---

## D7 — Deux modes de rendu, pour ne pas choisir entre lisibilité et preuve

Le pied de chapitre daté et le tableau de données replié sous chaque figure
sont des ajouts utiles — et ils rendaient `/tout` non comparable au document
d'origine.

**Décision.** `mode: 'page' | 'verbatim'`. Les pages de chapitre rendent les
ajouts ; `/tout`, qui sert de référence de non-régression, n'en rend aucun.
La comparaison automatique reste donc valide, et les lecteurs gardent les
compléments là où ils lisent réellement.

---

## D8 — La bibliographie est la seule différence assumée de `/tout`

`/tout` reconstitue les 21 chapitres **à l'identique** (vérifié :
`npm run check:render`), puis se referme sur une bibliographie **générée**
depuis les données, là où le document d'origine en avait une tenue à la main.

C'est une différence voulue — c'est l'objectif O3 — et c'est la seule. Le
script de comparaison l'exclut explicitement de son périmètre, et le dit.

---

## D9 — Millésimes : déduits, et comptés quand ils manquent

`vintage` est obligatoire. Il est déduit de l'année la plus récente citée dans
l'en-tête du tableau, son texte ou sa source. Pour **26 entrées sur 341**,
aucune année n'est déductible : elles portent `'à confirmer'`.

**Décision.** `check-data.ts` sépare deux régimes : les **invariants** font
échouer le build (source inconnue, ligne plus large que ses colonnes, série
désalignée) ; la **dette de migration** est comptée et détaillée dans
`.artifacts/audit.json` sans bloquer. Écrire un faux millésime pour satisfaire
un schéma aurait été pire que d'en compter 26 à confirmer.

---

## D11 — Le budget de JavaScript n'était pas tenu, et on ne le savait pas

**Ce qu'on croyait.** 103 Ko par page, sous le budget de 120 Ko fixé par la
spec (§9, critère 9). Ce chiffre venait de la ligne « First Load JS » de la
sortie de build de Next 15.

**Ce qu'on a mesuré.** Cette ligne ne compte qu'une partie des morceaux
chargés. En additionnant les scripts réellement référencés par le HTML
prérendu d'une page de chapitre, compressés comme un serveur les sert :

| Version | Poids réel par page |
|---|---:|
| Next 15.5.25 | 140 Ko |
| Next 16.3.4 | **170 Ko** |

Le budget n'a donc jamais été tenu, et le passage à Next 16 — nécessaire pour
clore les avis de sécurité (§D12) — ajoute 30 Ko.

**Décision.** `scripts/check-bundle.ts` mesure ce poids et l'affiche à chaque
`npm run verify`. Deux seuils, sur le modèle de §D9 : l'**objectif** de 120 Ko,
signalé tant qu'il n'est pas atteint, et un **cliquet** à 172 Ko qui fait
échouer la vérification si le poids augmente encore. La dette ne peut donc plus
ni grandir ni se cacher.

Next 16 n'affiche plus « First Load JS » du tout : sans ce script, le budget
aurait cessé d'être vérifié sans que personne s'en aperçoive.

**Le chemin pour y revenir.** Les pages de lecture n'ont besoin de React côté
client pour rien : la bascule de thème, le scrollspy et la recherche sont trois
comportements courts, sans état partagé, qui tiennent en JavaScript ordinaire.
Les sortir de React retirerait le moteur client des pages de chapitre et
ramènerait le poids très en dessous de l'objectif. C'est le chantier à ouvrir
si la légèreté redevient prioritaire ; il ne touche ni les données, ni le rendu.

**À retenir.** Un chiffre repris d'un outil n'est pas une mesure. Celui-ci a
tenu lieu de preuve pendant toute la construction sans jamais mesurer ce qu'on
croyait.

---

## D12 — Next.js 16 : imposé par la sécurité, validé par la preuve de rendu

Le déploiement Vercel a signalé une version vulnérable. Next 15.5.4 est touchée
par **CVE-2025-66478** (exécution de code à distance dans le protocole React
Flight) et trois autres avis. La ligne 15.5.25 clôt ceux qui visent Next
directement, mais laisse un avis modéré hérité du `postcss` embarqué, que seul
Next 16 corrige.

**Décision.** Passer à Next 16.3.4, la dernière version. `npm audit` est
désormais entièrement vert — 0 vulnérabilité, toutes sévérités.

**Ce qui rendait ce saut sûr.** Un changement de version majeure du cadre est
exactement le type de modification qui casse un rendu sans qu'on le voie.
`npm run check:render` a répondu en une commande : **55 891 éléments, aucun
écart**. La vérification construite en §D1 a payé son coût dès son premier
usage sérieux.

Coût mesuré : +30 Ko de JavaScript par page (§D11). Vitest passe au passage de
3.2.4 à 4.1.11, qui corrige une lecture de fichier arbitraire dans son serveur
d'interface.

---

## D13 — Le déploiement est décrit dans le dépôt, pas dans un tableau de bord

Le premier déploiement répondait `404 · NOT_FOUND` sur toutes les URL, alors
que le build réussissait et affichait la table complète des routes. Les deux
faits sont compatibles : avec le préréglage « Other », Vercel exécute quand
même `npm run build` — donc `next build` imprime bien ses routes — puis sert
le répertoire statique par défaut, `public/`, qui ne contient que l'index de
recherche. Un *Output Directory* forcé à `out`, vestige de la version de cette
spec qui prévoyait `output: 'export'` (§ retirée depuis), produit exactement
le même symptôme.

**Décision.** `vercel.json` déclare `framework: nextjs`. La configuration du
dépôt l'emporte sur les réglages du tableau de bord : le préréglage ne peut
plus diverger de ce que le projet est réellement, et un déploiement neuf n'a
aucun réglage à saisir.

**Ce que ça dit du diagnostic.** Un build vert et un site vide ne se
contredisent pas : le build dit ce qui a été compilé, pas ce qui est servi. Ce
sont deux étapes distinctes, et seule la seconde est visible du lecteur.

---

## D14 — Ajouter du contenu : on écrit dans le document d'origine

**Le problème.** La règle 8 de `CLAUDE.md` interdit de modifier à la main les
`content.tsx` et `data.ts` des chapitres : ils sont générés. Mais le contenu
rédactionnel nouveau doit bien être écrit quelque part, et `scripts/extract.ts`
est un traducteur, pas un lieu d'écriture.

**Ce qu'on a fait.** `Temp/chiffres2027 (3).html` devient la surface d'écriture
du contenu, pas seulement l'archive dont on est parti. On y ajoute la fiche au
balisage maison (`div.q`, `div.tw`, `p.src`, `div.lim`, `div.hole`,
`div.take`), puis `npm run extract` la propage.

**Pourquoi ça ne casse pas la garantie de rendu.** `check:render` compare le
site à ce fichier : les deux bougent ensemble, la comparaison reste exacte et
reste une preuve — elle prouve que l'extraction est fidèle, ce qui est bien ce
qu'elle a toujours prouvé. Ce qu'elle ne prouve plus, c'est que le site est
identique au document livré le 31 août 2026 ; cette version-là est dans
l'historique Git, qui est le bon endroit pour elle.

**Deux pièges rencontrés à l'écriture**, tous deux détectés par `check:render` :

- `&nbsp;` avant un `?` casse la comparaison — l'entité et le caractère U+00A0
  ne se sérialisent pas pareil de part et d'autre. Le document utilise une
  espace ordinaire avant `?` (245 occurrences) : s'y tenir ;
- `<span class="num">` sert à déclarer un **identifiant de jeu de données** :
  l'extracteur en fait le champ `datasets` de la source. L'écrire autour d'un
  mot qui n'est pas un code de base (« Siret ») crée une fausse entrée dans le
  registre.

**Première application : `s4-q24`**, sur l'emploi et le salaire des femmes,
en fin de partie 1 du chapitre « Emploi, chômage et coût du travail ».
Quatorze tableaux, neuf sources, aucune dette de migration ajoutée. Cinq encadrés
`hole` y signalent ce que la statistique publique ne permet pas d'établir :
l'écart de salaire à poste comparable par tranche d'âge, les tranches d'âge
intermédiaires, la ventilation sectorielle à métier constant, le taux de
promotion comparé à poste et ancienneté identiques, et l'ancienneté par sexe. Ces trous ne sont pas des lacunes de
recherche à combler plus tard : ce sont des données qui ne sont pas publiées,
et c'est un résultat en soi.

---

## D15 — Les URL de sources vivent dans l'extracteur, pas dans le document

**Le problème.** Le document d'origine cite ses sources en clair — « Insee
Focus n° 377 », « Eurostat, `lfsi_emp_a` » — sans jamais donner de lien. Le
lecteur ne peut pas vérifier sans chercher. Mais ajouter des `<a href>` dans
les blocs `p.src` changerait le rendu des pages de chapitre, qui doit rester
identique au document.

**Ce qu'on a fait.** L'URL est portée **à côté** du texte, dans le champ `url`
du registre, et affichée **seulement dans la bibliographie** — la seule surface
que `check:render` n'inspecte pas (§D8). Les pages de chapitre sont donc
inchangées, et `/sources` gagne un lien « Consulter la source » par entrée
renseignée.

La table `SOURCE_URLS` est dans `scripts/extract.ts`, clé par identifiant de
source. C'est le bon endroit au regard de la règle 8 : `src/data/sources.ts`
est généré, on n'y écrit pas à la main.

**Le piège, et son garde-fou.** Les identifiants de source sont dérivés du
texte du bloc : reformuler un `p.src` change son identifiant et laisserait son
URL orpheline, en silence. `npm run extract` recense donc les clés qui ne
correspondent à aucune source, et affiche le compte d'URL renseignées sur le
total. Aujourd'hui : **10 sur 202**, aucune orpheline. Le reste est le chantier
listé en §D10 — la mécanique est en place, le remplissage ne l'est pas.

---

## D16 — Un bloc source ajouté peut fausser le millésime des tableaux voisins

**Ce qui s'est passé.** L'extracteur déduit le millésime d'un tableau de la
plus récente année plausible trouvée dans son en-tête, puis, à défaut, dans
**tous les blocs `p.src` de la fiche** qui le contient (§D9). Ajouter une
section sourcée à l'intérieur d'une fiche existante a donc converti un
`vintage: 'à confirmer'` honnête, sur le tableau des effectifs de police, en
un `2025` faux — l'année d'un rapport que ce tableau ne cite pas.

Le symptôme était trompeur : la dette de migration **baissait** de 52 à 51
points. Une dette qui diminue sans qu'on ait rien corrigé est un signal
d'alerte, pas un progrès.

**Ce qu'on en tire, deux règles.**

1. **Une section nouvelle va dans sa propre fiche `div.q`**, pas au milieu
   d'une fiche existante. Les `p.src` sont partagés à l'échelle de la fiche :
   c'est l'unité d'isolement des sources et des millésimes. Ici, la section sur
   les effectifs de police est devenue `s12-q14`.
2. **Un tableau dont les données sont pluriannuelles porte ses bornes dans son
   en-tête** — « Trois éléments français, 2016-2022, … » — sinon le millésime
   est deviné sur la source la plus récente citée dans la fiche, qui n'est pas
   forcément celle de la donnée.

---

## D10 — Ce qui reste à faire

| Chantier | Volume | Où le voir |
|---|---|---|
| URL des sources | 192 entrées sans `url`, 10 renseignées | `npm run extract` |
| Millésimes à confirmer | 26 | `.artifacts/audit.json` |
| Figures au tracé d'origine | 22 | `.artifacts/audit.json` |
| Figures non converties | 4 | `.artifacts/audit.json` |
| Axe incohérent à arbitrer | 1 | D2 ci-dessus |
| Cellules encore en texte | 2 393 | extraction |
| Captures Playwright clair/sombre | non faites | spec §12, critère 5 |
| Budget JS non tenu | 170 Ko pour 120 visés | `npm run check:bundle`, §D11 |

La comparaison de non-régression est aujourd'hui structurelle (HTML élément par
élément), ce qui est plus strict qu'une capture d'écran sur le balisage, mais
ne dit rien du CSS appliqué. Les captures Playwright restent à ajouter pour
couvrir les thèmes clair et sombre aux trois largeurs.
