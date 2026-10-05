import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { whatsAppProps, WhatsAppIcon } from "./whatsapp"

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
        <p className="hero-sub">Saúde mental para mulheres</p>
        <p className="hero-apoio">
          Um espaço para você, mulher, em qualquer fase da vida. Ansiedade,
          autocobrança, sobrecarga, relacionamentos, maternidade: com base
          científica, escuta de verdade e zero julgamento.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primario" {...whatsAppProps("agendar-hero")}>
            <WhatsAppIcon />
            Quero conversar
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
          Me fale sobre você sem compromisso no WhatsApp.
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
