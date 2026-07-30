import * as React from "react"

import {
  waLink,
  MSG_GUIA_MATERNA,
  MSG_GUIA_FEMININO,
  reportWhatsAppConversion,
} from "./whatsapp"

const Guias = () => (
  <section className="s-guias" id="guias">
    <div className="container">
      <p className="kicker reveal">Materiais gratuitos</p>
      <h2 className="reveal">
        Dois guias, dois <em>caminhos</em> — escolha o seu.
      </h2>
      <p className="guias-intro reveal">
        Preparei dois guias de boas-vindas em PDF: quem eu sou, como trabalho,
        como funcionam as sessões e o que esperar do processo. Me chama no
        WhatsApp e te envio o seu — sem compromisso.
      </p>
      <div className="cards-servico">
        <article className="card-servico reveal">
          <h3>Guia da jornada materna</h3>
          <p className="card-meta">tentantes · gestantes · puérperas · mães</p>
          <p>
            Para quem vive (ou espera) a maternidade real: o turbilhão, a culpa,
            as decisões — e o cuidado possível em cada fase.
          </p>
          <a
            className="link-seta"
            href={waLink(MSG_GUIA_MATERNA)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={reportWhatsAppConversion}
          >
            Quero receber este guia →
          </a>
        </article>
        <article className="card-servico reveal">
          <h3>Guia do universo feminino</h3>
          <p className="card-meta">para você, mulher — em qualquer fase</p>
          <p>
            Para quem quer um espaço além dos papéis: ansiedade, autocobrança,
            relacionamentos, escolhas — sem a maternidade precisar estar no
            centro.
          </p>
          <a
            className="link-seta"
            href={waLink(MSG_GUIA_FEMININO)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={reportWhatsAppConversion}
          >
            Quero receber este guia →
          </a>
        </article>
      </div>
    </div>
  </section>
)

export default Guias
