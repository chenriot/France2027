# Prototypes

Maquettes autonomes, hors chaîne de build. Elles ne sont ni typées, ni testées,
ni couvertes par `npm run verify` : ce sont des propositions à regarder, pas du
code de production.

> **Ce prototype est maintenant construit.** La route `/accueil-2027`
> (`src/app/accueil-2027/`) reprend le même contenu et les mêmes animations
> sous la charte de `/elections-2027`. Le fichier ci-dessous reste la trace de
> l'étude, avec la palette du dossier plutôt que celle de la charte.

## `accueil-kpi-1c.html` — accueil à indicateurs, design 1c

Un fichier HTML autonome, à ouvrir directement dans un navigateur. Il propose
une page d'accueil ouvrant sur une mosaïque d'indicateurs, avant le sommaire.

**Ce qu'il montre.** Neuf tuiles principales et quatre mini-tuiles, de formes
différentes — grande valeur avec courbe, carte de chaleur, séries comparées,
jauge, barres, anneau, rangs, chiffre seul. Chacune empile deux ou trois
indicateurs et **bascule de l'un à l'autre par une rotation de carte**, toutes
les 7 à 13 secondes selon la tuile. Vingt-neuf indicateurs au total.

**L'animation.** Chaque tuile a sa propre période et son propre décalage
initial : la mosaïque ne bascule jamais d'un bloc. La carte tourne de 90°, la
face change à mi-course, puis la carte revient à plat — le procédé accepte
autant de faces qu'on veut, contrairement à un retournement à deux faces. Une
fine jauge en pied de tuile montre le temps restant.

Le survol fige la tuile, le clic passe à la face suivante, les pastilles en bas
à droite permettent d'aller directement à une face. Le bouton **Suspendre**
arrête tout. Sous `prefers-reduced-motion`, la rotation automatique est à
l'arrêt d'emblée et les pastilles deviennent le seul moyen de naviguer.

**Les graphiques s'animent à l'entrée.** À chaque fois qu'une face devient
visible — première apparition ou basculement —, elle repart de son état
« avant » et se construit : les **courbes se tracent** par décalage du pointillé
(`stroke-dashoffset`), l'aile colorée d'une courbe s'ouvre derrière elle au même
rythme, l'**anneau et l'arc de jauge se dessinent** depuis leur origine, les
**barres poussent** depuis leur base avec un léger décalage entre elles, les
**cellules de la carte de chaleur apparaissent** ligne après ligne, et tous les
**chiffres s'incrémentent** jusqu'à leur valeur. Repères, points et étiquettes
d'axe n'arrivent qu'une fois le tracé posé.

Le balisage porte toujours la valeur finale : une animation non jouée — tuile
hors champ, mouvement réduit — laisse le bon chiffre à l'écran. La première
animation d'une tuile attend qu'elle entre dans le champ, et sous
`prefers-reduced-motion` aucune ne se déclenche.

**Les données.** Toutes reprises des `data.ts` des chapitres, avec leur source
et leur millésime affichés sur chaque face. Le formatage suit les conventions de
`src/lib/format.ts` — virgule décimale, espace fine insécable dans les SVG,
`−` (U+2212) pour le signe moins. Aucune coordonnée de pixel n'est écrite à la
main : les tracés sont calculés depuis les valeurs, à la taille réelle de la
tuile, mesurée au montage puis à chaque redimensionnement.

**Les jetons de couleur sont repris verbatim de `src/styles/tokens.css`.** Le
prototype n'introduit aucune couleur nouvelle et suit le thème clair/sombre du
système ; le bouton **Thème** force l'un ou l'autre.

**Ce qu'il ne fait pas.** Aucun lien vers les chapitres, aucune intégration
Next.js, aucun test. Si le design est retenu, la mosaïque devient un composant
serveur alimenté par un registre d'indicateurs, et seule la rotation part dans
`src/components/client/`.

## `depense-publique-1975-2024.html` — animation : la dépense, poste par poste, puis face aux recettes

Un fichier HTML autonome, à ouvrir directement dans un navigateur. Il reprend la
figure « Dépense publique par nature, 1975-2024 » du chapitre *Dette et déficit*
et la transforme en cinq actes, sur la même planche, sans jamais la redessiner
de zéro.

**Le récit.** (1) Les cinq courbes par nature se tracent — une seule monte
vraiment. (2) Elles s'empilent : chaque poste vient se poser sur le précédent,
l'axe s'ouvre pour faire la place, la ligne du haut devient la somme des cinq.
(3) Cette somme est chiffrée à ses deux bouts. (4) Une bande hachurée comble
l'écart jusqu'à la dépense **totale** — subventions, autres transferts, dépenses
en capital, que les cinq postes ne couvrent pas. (5) Les recettes arrivent, et
l'écart entre les deux courbes, hachuré de rouge, est le déficit.

**L'animation.** L'état affiché est une fonction pure de `(acte, avancement)` :
reculer, sauter ou rejouer redonne exactement la même image. Les courbes se
tracent par découpe (`clipPath`), et l'empilement est une **interpolation entre
deux géométries** — une courbe est une bande d'épaisseur nulle posée sur sa
propre valeur, une bande empilée a pour bornes deux cumuls successifs ; le
passage de l'une à l'autre se fait poste par poste, avec un décalage. L'axe des
ordonnées s'anime lui aussi, de 30 à 66 % du PIB, sinon la pile sortirait du
cadre.

Survol : viseur et infobulle à l'année, qui ne montrent que ce que l'acte en
cours a révélé. Clavier : ←, → et espace. `?acte=4` ouvre sur un acte, figé —
utile pour relire une étape ou en donner le lien ; `?acte=2&avance=0.42` ouvre
au milieu d'une transformation. Sous `prefers-reduced-motion`, rien ne bouge :
la planche s'ouvre à son état final et se parcourt aux boutons.

**Les données.** Aucun chiffre n'est saisi à la main, ni dans le graphique, ni
dans les phrases du récit : `node prototypes/depense-publique-donnees.mjs` les
lit dans le dépôt et réécrit le bloc `DONNEES` du fichier. Les cinq postes
viennent de la figure du chapitre ; la dépense totale, les recettes et le solde
viennent d'un classeur Insee (comptes nationaux annuels, base 2020) déposé dans
`docs/`. Le script refuse d'écrire si le croisement des deux sources cesse
d'être cohérent — reste négatif, ou `recettes − dépenses` s'écartant du solde
notifié de plus de 0,1 point.

**Ce qu'il faut savoir avant de le montrer.** La bande « autres dépenses » croise
deux millésimes de PIB (Eurostat pour les postes, Insee pour le total), qui
diffèrent de 0,1 à 0,3 point : c'est un ordre de grandeur, pas une décimale. Le
pied de page le dit, avec les trois autres limites.

**Ce qu'il ne fait pas.** Aucune intégration Next.js, aucun test, aucun lien vers
les chapitres. S'il est retenu, les données remontent par la voie normale — le
document d'origine et un générateur de figure — et seule l'animation part dans
`src/components/client/`.
