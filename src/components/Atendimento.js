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
            Um espaço semanal só seu, pra olhar pra você com calma. Um lugar
            para acolher a ansiedade e a autocobrança, repensar seus
            relacionamentos e lidar com os desafios e a falta de reconhecimento
            nas esferas da vida. A sua identidade inteira cabe aqui.
          </p>
          <p className="card-rodape">Atendimento online · Brasil todo</p>
          <a className="link-seta" {...whatsAppProps("servico-individual")}>
            Conversar no WhatsApp →
          </a>
        </article>
        <article className="card-servico reveal">
          <h3>Acompanhamento perinatal</h3>
          <p className="card-meta">
            para tentantes, gestantes, puérperas e mães
          </p>
          <p>
            Um porto seguro para a sua jornada materna, seja qual for a fase
            dela. Acolhimento profundo para os medos, o luto, a culpa e as
            intensas transformações de identidade que a maternidade traz.
          </p>
          <p className="card-rodape">Atendimento online · Brasil todo</p>
          <a className="link-seta" {...whatsAppProps("servico-perinatal")}>
            Conversar no WhatsApp →
          </a>
        </article>
      </div>
    </div>
  </section>
)

export default Atendimento
