import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { waLink, MSG_AGENDAR, WhatsAppIcon } from "./whatsapp"

const Hero = () => (
  <section className="hero" id="inicio">
    <div className="hero-cena-bg" aria-hidden="true">
      <StaticImage
        src="../images/hero-cena.jpg"
        alt=""
        layout="fullWidth"
        loading="eager"
        fetchpriority="high"
        placeholder="dominantColor"
        quality={80}
      />
    </div>
    <div className="container hero-conteudo">
      <div className="hero-texto reveal">
        <h1>
          Você não precisa dar conta de tudo <em>sozinha</em>.
        </h1>
        <p className="hero-sub">Psicoterapia perinatal &amp; feminina</p>
        <p className="hero-apoio">
          Para mulheres em todas as fases — na jornada materna ou fora dela.
          Ansiedade, sobrecarga, identidade, relacionamentos: com base
          científica, escuta de verdade e zero julgamento.
        </p>
        <div className="hero-ctas">
          <a
            className="btn btn-primario"
            href={waLink(MSG_AGENDAR)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Quero agendar uma conversa
          </a>
          <a className="btn btn-fantasma" href="#sobre">
            Me conhecer primeiro
            <svg className="icone" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
        </div>
        <p className="hero-micro">
          Primeira conversa sem compromisso — direto no WhatsApp.
        </p>
      </div>
    </div>
    <span className="sr-only">
      Manuela Improta, psicóloga, em pé no seu consultório acolhedor, com a mão
      no bolso, sorrindo com confiança.
    </span>
  </section>
)

export default Hero
