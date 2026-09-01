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
