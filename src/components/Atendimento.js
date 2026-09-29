import * as React from "react"

import maeBebeLinha from "../images/mae-bebe-linha.png"
import { whatsAppProps } from "./whatsapp"

const Atendimento = () => (
  <section className="s-atendimento" id="atendimento">
    <img
      className="marca-dagua"
      src={maeBebeLinha}
      alt=""
      width="472"
      height="664"
      loading="lazy"
    />
    <div className="container">
      <p className="kicker reveal">Como posso te acompanhar</p>
      <h2 className="reveal">
        Dois jeitos de <em>cuidar</em>.
      </h2>
      <div className="cards-servico">
        <article className="card-servico reveal">
          <h3>Psicoterapia individual</h3>
          <p className="card-meta">para mulheres · online</p>
          <p>
            Um espaço semanal só seu, pra olhar pra você com calma: ansiedade,
            autocobrança, relacionamentos, trabalho, identidade. E também pra
            quem vive a jornada materna — tentante, gestante, puérpera ou mãe.
            Tudo cabe aqui.
          </p>
          <p className="card-rodape">Atendimento online · Brasil todo</p>
          <a className="link-seta" {...whatsAppProps("servico-individual")}>
            Conversar no WhatsApp →
          </a>
        </article>
        <article className="card-servico reveal">
          <h3>Orientação parental</h3>
          <p className="card-meta">para mães, pais e cuidadores · online</p>
          <p>
            Um espaço para destravar as dúvidas do dia a dia com seu filho:
            rotina, limites, birras, vínculo. Sem receita pronta — orientação
            com base científica para o seu contexto de família. É o único
            formato em que atendo também os pais.
          </p>
          <p className="card-rodape">Atendimento online · Brasil todo</p>
          <a className="link-seta" {...whatsAppProps("servico-parental")}>
            Conversar no WhatsApp →
          </a>
        </article>
      </div>
    </div>
  </section>
)

export default Atendimento
