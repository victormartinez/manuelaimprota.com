import * as React from "react"

import logoHorizontal from "../images/logo-horizontal.png"
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "./whatsapp"

const Rodape = () => (
  <footer className="rodape">
    <div className="container rodape-grid">
      <img
        className="rodape-logo"
        src={logoHorizontal}
        alt="Manuela Improta — Saúde mental para mulheres"
        width="1021"
        height="151"
        loading="lazy"
      />
      <p className="rodape-info">
        Manuela Improta · Saúde mental para mulheres · CRP 03/30689
        <br />
        Atendimento online · Brasil todo · Instagram:{" "}
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          {INSTAGRAM_HANDLE}
        </a>
      </p>
      <p className="rodape-aviso">
        Este site tem caráter informativo e não substitui atendimento
        psicológico. Em caso de crise ou emergência, ligue{" "}
        <strong>188 (CVV — 24h, gratuito)</strong> ou procure o serviço de saúde
        mais próximo.
      </p>
      <p className="rodape-copy">© 2026 Manuela Improta</p>
    </div>
  </footer>
)

export default Rodape
