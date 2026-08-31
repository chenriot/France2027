// Contenu rédactionnel du chapitre. Aucun chiffre tabulé ou tracé ici :
// tout vient de ./data.ts. Voir CLAUDE.md, règle 2.
import { chapterComponents, Question } from '@/components'
import type { RenderMode } from '@/components'
import { series, tables } from './data'

export default function Content({ mode = 'page' }: { mode?: RenderMode }) {

  return (
    <>

<Question id="s17-q1" title="Où en est la natalité ?"><div className="pull"><div><span className="v">663 000</span><span className="l">naissances en 2024 (−2,2 %)</span></div><div><span className="v">−21,5 %</span><span className="l">depuis le pic de 2010</span></div><div><span className="v">1,62</span><span className="l">indice de fécondité (2,03 en 2010)</span></div><div><span className="v">+17 000</span><span className="l">solde naturel, plus bas depuis 1945</span></div></div><p>La France reste le pays le plus fécond de l'UE, mais bien en dessous du seuil de renouvellement (2,1). Explications avancées : recul de l'âge à la maternité (environ 31 ans pour le premier enfant), contraintes matérielles, écart croissant entre fécondité désirée et observée, et effet des réformes de la politique familiale de 2013-2015.</p></Question>


<Question id="s17-q2" title="Combien d'actifs et de très âgés demain ?"><p>Scénario central Insee 2021-2070 : la part des 65 ans ou plus passe d'environ <strong>21 % en 2021 à 26 % vers 2040</strong> et se rapproche de 29 % en 2070. Le nombre de personnes de 80 ans ou plus — 3,9 millions en 2021 — devrait <strong>quasiment doubler d'ici 2050</strong>, pour atteindre de l'ordre de 8 millions.</p><p><strong>Le vrai choc n'est pas les retraites.</strong> Leur trajectoire est globalement stabilisée grâce aux réformes successives — ce qui distingue la France de plusieurs États membres. Le choc est ailleurs : <strong>santé et surtout dépendance</strong>, attendues en hausse de <strong>+1 à +2 points de PIB</strong> à l'horizon 2050-2070.</p><p>La dépendance représente aujourd'hui de l'ordre de <strong>1,5 à 2,5 % du PIB</strong> (30 à 35 Md€/an). Le rapport Libault (2019) chiffrait le besoin supplémentaire à environ <strong>6 Md€ par an à horizon 2030</strong>. Les projections situent la dépense à 2,8-3,5 % du PIB en 2050-2060. <strong>Le financement pérenne reste un arbitrage politique non tranché.</strong></p></Question>


<Question id="s17-q3" title="L'immigration ou la natalité peuvent-elles régler le problème ?"><p><strong>La « migration de remplacement »</strong> vient du rapport de l'ONU de 2000, qui calculait le solde nécessaire pour maintenir constante la population en âge de travailler. Très critiqué depuis, pour trois raisons : c'est une extrapolation mécanique qui ignore la capacité d'absorption du marché du travail ; <strong>les migrants vieillissent aussi</strong> et leur fécondité converge vers celle du pays d'accueil, ce qui rend la stabilisation instable sans flux sans cesse croissants ; et d'autres leviers existent (taux d'emploi des femmes et des seniors, âge de départ, productivité). L'Insee, pour sa part, ne calcule aucune migration « optimale » : elle projette des trajectoires alternatives sans les qualifier de souhaitables.</p><p><strong>La natalité</strong> ne peut rien avant les années 2050, pour une raison de calendrier imparable : un enfant né aujourd'hui ne cotise que <strong>vingt à vingt-cinq ans plus tard</strong>, alors que le pic de pression se situe dans les années 2025-2045. Pire, à court terme l'effet est négatif — allocations, crèches, éducation viennent avant les cotisations.</p><p><strong>Ce qui marche vraiment sur la natalité, d'après la littérature</strong> : les incitations financières directes ont un effet faible et surtout de court terme — elles modifient le <em>calendrier</em> des naissances plus que la descendance finale. La Hongrie a vu son indice remonter de 1,2 à 1,5-1,6 puis refluer depuis 2022. Les dispositifs de <strong>conciliation</strong> (crèches abordables, congés bien indemnisés) sont plus robustes, mais l'ordre de grandeur reste modeste : <strong>+0,05 à +0,2 enfant par femme</strong> pour des politiques ambitieuses — loin de suffire à ramener la fécondité au seuil de renouvellement.</p></Question>

    </>
  )
}
