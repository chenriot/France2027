# Chiffres pour 2027

Dossier factuel sur l'état de la France, en 21 chapitres : 18 thèmes, une
synthèse, une grille de lecture des promesses électorales et le dossier
expliqué simplement.

Site Next.js 15 (App Router), déployé sur Vercel. Chaque chiffre affiché porte
sa source et son millésime, et vit dans le fichier de données de son chapitre —
jamais dans le balisage.

- Spécification : [`specs/site-chiffres-2027.md`](specs/site-chiffres-2027.md)
- Arbitrages de mise en œuvre : [`specs/DECISIONS.md`](specs/DECISIONS.md)
- Consignes de contribution : [`CLAUDE.md`](CLAUDE.md)

## Les URL du site

| Chemin | Contenu |
|---|---|
| `/` | Accueil : comment lire le dossier, et le sommaire des 21 chapitres |
| `/tout` | **Le document intégral** sur une page — lecture linéaire, impression, archivage |
| `/sources` | Bibliographie générée depuis les données, avec les chapitres qui citent chaque source |
| `/<chapitre>` | Un chapitre, avec le sommaire de ses fiches dans le rail |

Les 21 chapitres, dans l'ordre du sommaire :

`/synthese` · `/depenses-publiques` · `/dette-deficit` · `/retraites-travail` ·
`/emploi-chomage` · `/industrie` · `/commerce-exterieur` · `/immigration` ·
`/ecologie-climat` · `/energie` · `/europe` · `/sante` · `/securite-justice` ·
`/logement` · `/education` · `/niveau-de-vie` · `/efficacite-etat` ·
`/demographie` · `/perception-realite` · `/grille-promesses` ·
`/explique-simplement`

Chaque fiche a son ancre : `/logement#s13-q4`. Les identifiants sont ceux du
document d'origine, pour que les liens déjà partagés continuent de fonctionner.

## Un fichier autonome

```sh
npm run build && npm run export:html    # .artifacts/chiffres-2027.html
```

Le document intégral en un seul fichier HTML, styles compris : les liens
internes deviennent des ancres, le sommaire latéral fonctionne, l'impression
aussi. Pour partager, archiver, ou déposer le dossier là où un site ne va pas.

## Lancer en local

```sh
npm install
npm run dev            # http://localhost:3000
```

## Déployer sur Vercel

Le dépôt est prêt : build Next.js standard, aucun `output: 'export'`, aucune
route dynamique, rien à configurer côté runtime.

1. Sur [vercel.com/new](https://vercel.com/new), importer `chenriot/France2027`.
2. Ne rien régler. `vercel.json` déclare `framework: nextjs`, et **la
   configuration du dépôt l'emporte sur les réglages du tableau de bord** :
   le projet ne peut pas se retrouver sur un autre préréglage, ni servir un
   répertoire de sortie qui n'existe pas. La commande de build lance l'audit
   des données avant la compilation : **une donnée incohérente arrête le
   déploiement**, elle n'est pas publiée.
3. Déployer. Vercel attribue une URL `…vercel.app` immédiatement.

Si un déploiement répond `404 · NOT_FOUND` sur toutes les URL alors que le
build affiche la table des routes, c'est que Vercel sert autre chose que
`.next` — préréglage « Other », ou *Output Directory* forcé à `out`, vestige
d'une version de la spécification qui prévoyait `output: 'export'`. Le
`vercel.json` existe pour rendre ce cas impossible ; s'il persiste, désactiver
l'*Override* du champ *Output Directory* dans **Settings → Build and
Deployment**.

### Domaine

Aucun domaine n'est écrit en dur. `src/lib/site.ts` résout l'adresse publique
dans cet ordre : `NEXT_PUBLIC_SITE_URL`, puis le domaine de production Vercel,
puis l'URL du déploiement courant, puis `localhost`. Les balises `canonical`,
les métadonnées Open Graph et le sitemap sont donc justes sur une
prévisualisation comme en production, sans réglage.

Quand le domaine définitif existe, le déclarer une fois dans les variables
d'environnement du projet Vercel :

```
NEXT_PUBLIC_SITE_URL = https://exemple.fr
```

## Vérifier

```sh
npm run verify
```

Enchaîne types, tests, audit des données, build, et **non-régression de
rendu** : le HTML prérendu de `/tout` est comparé au document d'origine,
élément par élément. Aujourd'hui 55 891 éléments, aucun écart. C'est la
commande à lancer avant de pousser.

| Commande | Ce qu'elle fait |
|---|---|
| `npm run dev` | serveur de développement |
| `npm run verify` | la chaîne complète |
| `npm run extract` | régénère les 21 chapitres depuis le document d'origine |
| `npm run check:data` | audit des données ; écrit `.artifacts/audit.json` |
| `npm run check:render` | compare `/tout` au document d'origine |
| `npm run check:bundle` | poids du JavaScript par page de chapitre |
| `npm run export:html` | exporte le document en un fichier HTML autonome |
| `npm test` | tests unitaires |
