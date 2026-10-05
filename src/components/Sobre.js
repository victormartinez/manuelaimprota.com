import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import monograma from "../images/monograma.png"

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
          Psicóloga de base junguiana. Mulher na <em>vida real</em>.
        </h2>
        <p className="reveal">
          Sou a Manuela Improta, psicóloga (CRP 03/30689). Na prática clínica,
          me dedico a ser uma rede de apoio segura para lidarmos com os mais
          diversos dilemas que podem atravessar a sua rotina: a ansiedade
          silenciosa, a sobrecarga de tentar dar conta de tudo, as transições de
          carreira e as dinâmicas dos seus relacionamentos.
        </p>
        <p className="reveal">
          No meu trabalho, a base científica anda junto com a vida real. Nada de
          fórmula pronta, nada de “jeito certo” de ser mulher — ou de maternar,
          para as pacientes que também acompanho nessa fase. O que existe é a
          sua história, o seu contexto e um caminho construído com você, no seu
          ritmo.
        </p>
        <p className="reveal">
          Falo da vida e da saúde mental da mulher sem romantizar e sem
          assustar. Porque informação boa é a que alivia — e acolhimento de
          verdade é o que não julga.
        </p>
        <p className="sobre-assinatura reveal">
          <img src={monograma} alt="" width="512" height="425" />{" "}
          <span>Manuela Improta</span>
        </p>
      </div>
    </div>
  </section>
)

export default Sobre
