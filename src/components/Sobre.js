import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import monograma from "../images/monograma.png"
import { INSTAGRAM_HANDLE } from "./whatsapp"

const Sobre = () => (
  <section className="s-sobre" id="sobre">
    <div className="container sobre-grid">
      <div className="sobre-foto reveal">
        <StaticImage
          src="../images/manuela-sobre.jpg"
          alt="Manuela Improta lendo um livro em uma poltrona clara, com um cardigã verde-sage e uma planta ao fundo"
          layout="constrained"
          width={800}
          quality={80}
        />
      </div>
      <div className="sobre-texto">
        <p className="kicker reveal">Prazer, Manuela</p>
        <h2 className="reveal">
          Psicóloga de base junguiana. Mãe no <em>caos real</em>.
        </h2>
        <p className="reveal">
          Sou a Manuela Improta, psicóloga (CRP 03/30689) e mãe do Henrique.
          Atendo mulheres — na jornada materna e nas questões do universo
          feminino — e vivo, na prática, muito do que escuto no consultório.
        </p>
        <p className="reveal">
          No meu trabalho, a base científica anda junto com a vida real. Nada de
          fórmula pronta, nada de “jeito certo de maternar”. O que existe é a
          sua história, o seu contexto e um caminho construído com você, no seu
          ritmo.
        </p>
        <p className="reveal">
          Falo de maternidade e de vida de mulher sem romantizar e sem assustar.
          Porque informação boa é a que alivia — e acolhimento de verdade é o
          que não julga.
        </p>
        <p className="sobre-assinatura reveal">
          <img src={monograma} alt="" width="512" height="425" />{" "}
          <span>{INSTAGRAM_HANDLE}</span>
        </p>
      </div>
    </div>
  </section>
)

export default Sobre
