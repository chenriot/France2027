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

## `depense-publique-1975-2024.html` — la dépense publique année après année, et la dette qu'elle laisse

Un fichier HTML autonome, à ouvrir directement dans un navigateur. Il reprend
les séries de la figure « Dépense publique par nature, 1975-2024 » du chapitre
*Dette et déficit* et les déroule dans le temps, de 1975 à 2024.

**Ce qu'on voit.** La dépense se construit année après année, empilée du sol
vers le sommet : investissement, rémunération des agents, consommations
intermédiaires, charge de la dette, autres dépenses, prestations sociales. Le
sommet de la pile est la dépense publique totale. Une courbe de recettes
progresse en dessous, et la tranche qui les sépare — voilée puis hachurée de
rouge — est le déficit de l'année : la part de la dépense que les recettes ne
couvrent pas. À droite, une barre verticale monte avec le stock de dette.

**L'ordre d'empilement est une décision de lecture**, pas l'ordre des données :
l'investissement au sol, le social en tête, le solde non détaillé juste dessous.
Les consommations intermédiaires sont intercalées au-dessus de la rémunération
des agents — les deux postes de fonctionnement courant — parce que sans elles la
pile n'atteindrait pas le total, et la comparaison aux recettes perdrait son
sens.

**Deux unités de lecture.** *En part du PIB*, celle du dossier : ce que la
dépense pèse dans la richesse produite. *En euros courants* : combien d'argent,
l'inflation comprise — une lecture qui répond à une autre question et dont une
bonne part de la pente vient des prix. Le second mode demande une série de PIB
en valeur ; tant qu'elle n'est pas dans `docs/`, le bouton reste fermé et le dit,
plutôt que d'approcher.

**Pour ouvrir la lecture en euros**, il suffit de déposer dans `docs/` le PIB
annuel à prix courants, 1975-2024, et de relancer le générateur. Il fouille tous
les fichiers du dossier : un `.xlsx` dont une ligne commence par « Produit
intérieur brut » et dont une ligne d'en-tête porte les années — la forme des
tableaux de l'Insee —, ou, à défaut, un `.csv` à deux colonnes `année ; valeur`.
Les millions d'euros sont convertis en milliards ; toute autre unité est
refusée, comme l'est une série qui reculerait de plus de 5 % en un an, signe
qu'elle est en volume et non en valeur.

**L'animation.** L'image est une fonction pure de `(année, mode)` : reculer,
sauter ou rejouer redonne exactement la même, et **chaque nombre affiché est une
donnée de l'année** — rien n'est interpolé entre deux points. Un pas par année,
380 ms, avec le ruban des mandats qui se dévoile au même rythme. Sept jalons
—  1975, 1981, 1993, 2000, 2009, 2020, 2024 — commentent le moment atteint,
leurs chiffres relus des séries dans l'unité courante.

Survol : viseur et infobulle à l'année, bornées à ce que l'animation a atteint.
Curseur de défilement, clavier (←, →, espace). `?an=1993` ouvre sur une année,
figée, et `?mode=val` sur la lecture en euros — utile pour relire un moment ou
en donner le lien. Sous `prefers-reduced-motion`, rien ne bouge : la planche
s'ouvre sur 2024 et se parcourt au curseur.

**Les données.** Aucun chiffre n'est saisi à la main, ni dans le graphique, ni
dans les phrases des jalons : `node prototypes/depense-publique-donnees.mjs` les
lit dans le dépôt et réécrit le bloc `DONNEES` du fichier. Les cinq postes
viennent de la figure du chapitre ; la dépense totale, les recettes, le solde au
sens de Maastricht et la dette brute viennent d'un classeur Insee (comptes
nationaux annuels, base 2020) déposé dans `docs/`. Le script refuse d'écrire si
le croisement cesse de tenir : reste négatif, `recettes − dépenses` s'écartant du
solde notifié de plus de 0,1 point, trou dans la dette une fois la série
commencée, ou PIB dans une unité inattendue.

**Ce qu'il faut savoir avant de le montrer.** La dette n'est pas la somme des
déficits : flux contre stock, et un ratio dont le dénominateur bouge. La bande
« autres dépenses » croise deux millésimes de PIB (Eurostat pour les postes,
Insee pour le total), qui diffèrent de 0,1 à 0,3 point. La dette n'est pas
mesurée avant 1978, et la barre le dit au lieu de partir de zéro. Le pied de
page porte ces limites, avec 2020-2021 et le ressaut des subventions de crise.

**Ce qu'il ne fait pas.** Aucune intégration Next.js, aucun test, aucun lien vers
les chapitres. S'il est retenu, les données remontent par la voie normale — le
document d'origine et un générateur de figure — et seule l'animation part dans
`src/components/client/`.

## `prestations-sociales-2024.html` — où vont les prestations sociales

Un fichier HTML autonome, à ouvrir directement dans un navigateur. Il ouvre un
seul chiffre — les prestations de protection sociale versées en 2024 — et le
décompose en six actes.

**Le récit.** (1) Un bloc : le total, qui ne dit rien tant qu'on ne l'ouvre pas.
(2) Il se divise en six risques, au sens de la nomenclature des comptes de la
protection sociale. (3) Les segments se rangent du plus lourd au plus léger, à la
même échelle : les ordres de grandeur deviennent comparables. (4) Les deux
premiers risques font quatre cinquièmes du total. (5) Les trois qui occupent le
débat public en font un dixième. (6) Chaque barre s'ouvre enfin sur ses postes,
et le premier de tous — les pensions de retraite — pèse à lui seul plus du tiers
de l'ensemble.

**La transformation est une interpolation de rectangles** : un risque garde sa
largeur — l'échelle en euros ne change jamais — et ne déplace que son coin.
Passer du bloc empilé aux rangées classées est donc un simple réarrangement, ce
qui est exactement ce qu'on veut montrer. Les étiquettes des petits risques se
posent sous le bloc à la première hauteur libre, largeurs comparées.

Survol : le détail complet d'un risque, poste par poste. Clavier : ←, → et
espace. `?acte=4` ouvre sur un acte, figé. Sous `prefers-reduced-motion`, la
planche s'ouvre à son état final et se parcourt aux boutons.

**Les données.** `node prototypes/prestations-donnees.mjs` les lit dans le
chapitre « Dépenses publiques et prélèvements » : la figure des six risques pour
le premier niveau, les tableaux de détail pour le second. Ce que le script
déclare, ce ne sont pas des chiffres mais **quelles lignes retenir** — les
tableaux du dossier mêlent des postes, leurs sous-postes et un sous-total
(« Total aides au logement ») qui compterait deux fois. La sélection est
explicite, et le script échoue si une ligne disparaît du chapitre ou si les
postes retenus dépassent le total de leur risque.

**Ce qu'il faut savoir avant de le montrer.** Le périmètre est celui de la DREES
— comptes de la protection sociale, régimes privés compris — et non la ligne
« prestations sociales » des comptes nationaux, plus étroite, qui vaut 25,5 % du
PIB dans l'autre prototype : les deux totaux ne se superposent pas. Les postes
nommés ne couvrent pas tout un risque (de 70 % à 100 % selon les cas) ; la part
laissée en clair dans chaque barre est ce qui reste, et elle n'est jamais
complétée par une valeur inventée.

**Ce qu'il ne fait pas.** Une seule année : les comptes de la protection sociale
remontent à 1959, mais le dossier n'en porte que le millésime 2024. Une
animation de l'évolution par risque demanderait cette série. Aucune intégration
Next.js, aucun test.
