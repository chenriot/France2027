/**
 * En-tête du dossier — repris mot pour mot du document d'origine, y compris la
 * méthodologie et la légende des encadrés. Le texte est éditorial : il n'est
 * pas reformulé par la refonte.
 */
export function Masthead() {
  return (
      <header className="mast">
        <p className="kicker">Note de synthèse · août 2026</p>
        <h1>Chiffres pour 2027</h1>
        <p className="standfirst">Réponses documentées à plus de deux cent cinquante questions sur les finances publiques, les retraites, l'immigration, l'énergie, la sécurité, le logement et l'école — <strong>avec la source, l'année de référence et ce que le chiffre ne dit pas</strong>.</p>

        <div className="method">
          <h2>Comment lire ce document</h2>
          <ul>
            <li><strong>Chaque réponse porte sa source et son millésime.</strong> Un chiffre sans année ni producteur n'est pas un argument, c'est un slogan.</li>
            <li><strong>Fait, estimation et choix politique sont distingués.</strong> « La France dépense 57 % du PIB » est un fait ; « c'est trop » est un choix politique. Les deux sont légitimes, mais ils ne se discutent pas de la même façon.</li>
            <li><strong>Le dénominateur est presque toujours l'endroit où se cache le désaccord.</strong> La France est 2ᵉ d'Europe pour la dépense publique en % du PIB, mais 8ᵉ par habitant. Les deux chiffres sont exacts et disent des choses différentes.</li>
            <li><strong>Les encadrés verts définissent une notion</strong>, les orange signalent une limite de mesure, les rouges une donnée qui n'existe pas ou n'a pas été trouvée.</li>
            <li><strong>Certaines sources ne sont pas neutres.</strong> Insee, DREES, Cour des comptes, RTE, SSMSI, COR, Eurostat et l'OCDE produisent la statistique ; l'IFRAP, Rexecode, l'Institut Montaigne, Terra Nova, l'Observatoire de l'immigration et de la démographie ou Basta! sont des acteurs engagés du débat. Ils ne sont cités qu'à défaut de source publique, et signalés comme tels.</li>
          </ul>
          <div className="legend">
            <span><i className="chip c3" />Réponse sourcée</span>
            <span><i className="chip c4" />Définition</span>
            <span><i className="chip c1" />Limite méthodologique</span>
            <span><i className="chip c2" />Donnée non produite ou non trouvée</span>
          </div>
        </div>
      </header>
  )
}
