import * as React from "react"

import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "./whatsapp"

/* Prova social ética — Res. CFP 011/2018 veda depoimento de paciente */
const Confianca = () => (
  <section className="s-confianca" id="confianca">
    <div className="container">
      <p className="kicker reveal">Confiança, com ética</p>
      <h2 className="reveal">
        Por que você não vê depoimentos <em>aqui</em>.
      </h2>
      <p className="confianca-intro reveal">
        O Código de Ética da Psicologia (Resolução CFP 011/2018) não permite
        divulgar depoimentos de pacientes — nem de forma anônima. E eu levo isso
        a sério: o mesmo sigilo que vai proteger a sua história já protege a de
        quem caminha comigo. Aqui, a confiança se constrói com o que{" "}
        <strong>pode</strong> ser mostrado:
      </p>
      <ul className="fases">
        <li className="fase reveal">
          <h3>Registro ativo</h3>
          <p>
            CRP 03/30689 — registro profissional público, verificável no
            Conselho Regional de Psicologia.
          </p>
        </li>
        <li className="fase reveal">
          <h3>Sigilo absoluto</h3>
          <p>
            o que acontece na sessão fica na sessão. Sem exceção — é lei, e é
            valor.
          </p>
        </li>
        <li className="fase reveal">
          <h3>Base científica</h3>
          <p>
            psicologia analítica (junguiana) e estudo contínuo — nada de fórmula
            de internet.
          </p>
        </li>
        <li className="fase reveal">
          <h3>Trabalho às claras</h3>
          <p>
            meu jeito de pensar e acolher está público no{" "}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              {INSTAGRAM_HANDLE}
            </a>{" "}
            — me conheça antes da primeira conversa.
          </p>
        </li>
      </ul>
    </div>
  </section>
)

export default Confianca
