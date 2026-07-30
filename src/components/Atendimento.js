import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import maeBebeLinha from "../images/mae-bebe-linha.png"
import {
  waLink,
  MSG_PSICOTERAPIA,
  MSG_PARENTAL,
  reportWhatsAppConversion,
} from "./whatsapp"

const TOTAL_SLIDES = 5

const Atendimento = () => {
  const trilhoRef = React.useRef(null)
  const [ativo, setAtivo] = React.useState(0)

  const indiceAtual = () => {
    const trilho = trilhoRef.current
    return Math.round(trilho.scrollLeft / trilho.clientWidth)
  }

  const aoRolar = () => {
    setAtivo(Math.min(indiceAtual(), TOTAL_SLIDES - 1))
  }

  const navegar = direcao => {
    const trilho = trilhoRef.current
    const alvo = Math.max(
      0,
      Math.min(TOTAL_SLIDES - 1, indiceAtual() + direcao)
    )
    trilho.scrollTo({ left: alvo * trilho.clientWidth, behavior: "smooth" })
  }

  return (
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
              Um espaço semanal só seu: para a tentante, a gestante, a puérpera,
              a mãe — e a mulher que existe antes e além de todos esses papéis,
              seja a maternidade parte da sua vida ou não. Ansiedade, culpa,
              autocobrança, sobrecarga, relacionamentos, luto do parto,
              identidade: tudo cabe aqui.
            </p>
            <p className="card-rodape">Atendimento online · Brasil todo</p>
            <a
              className="link-seta"
              href={waLink(MSG_PSICOTERAPIA)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={reportWhatsAppConversion}
            >
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
            <a
              className="link-seta"
              href={waLink(MSG_PARENTAL)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={reportWhatsAppConversion}
            >
              Conversar no WhatsApp →
            </a>
          </article>
        </div>
        <div
          className="carrossel reveal"
          role="region"
          aria-label="Quem encontra cuidado aqui"
        >
          <div
            className="carrossel-trilho"
            id="trilho-atendimento"
            tabIndex={0}
            ref={trilhoRef}
            onScroll={aoRolar}
          >
            <figure className="carrossel-slide slide-sessao">
              <StaticImage
                src="../images/carrossel-sessao-online.jpg"
                alt="Mulher no sofá de casa em sessão de terapia online pelo notebook, com caderno e chá ao lado"
                layout="constrained"
                width={1280}
                quality={80}
              />
              <figcaption className="fig-esq">
                <span className="slide-tag">Você, mulher</span>{" "}
                <strong className="slide-titulo">
                  Terapia online, <em>no seu tempo</em> — com ou sem maternidade
                  no centro.
                </strong>
              </figcaption>
            </figure>
            <figure className="carrossel-slide slide-gestante">
              <StaticImage
                src="../images/carrossel-gestante.jpg"
                alt="Gestante sentada junto à janela com as mãos na barriga, serena, em casa acolhedora de tons claros"
                layout="constrained"
                width={1280}
                quality={80}
              />
              <figcaption className="fig-esq">
                <span className="slide-tag">Gestantes</span>{" "}
                <strong className="slide-titulo">
                  Se preparar pro que vem, <em>sem idealizar</em>.
                </strong>
              </figcaption>
            </figure>
            <figure className="carrossel-slide slide-puerpera">
              <StaticImage
                src="../images/carrossel-puerpera.jpg"
                alt="Mãe recente segurando o recém-nascido adormecido no colo, em quarto de luz suave"
                layout="constrained"
                width={1280}
                quality={80}
              />
              <figcaption className="fig-dir">
                <span className="slide-tag slide-tag-sage">Puérperas</span>{" "}
                <strong className="slide-titulo">
                  Colo pra quem vive o <em>turbilhão</em>.
                </strong>
              </figcaption>
            </figure>
            <figure className="carrossel-slide slide-familia">
              <StaticImage
                src="../images/orientacao-familia.jpg"
                alt="Mãe e pai sentados no sofá de casa brincando com o bebê no colo, em clima acolhedor"
                layout="constrained"
                width={1400}
                quality={80}
              />
              <figcaption className="fig-dir">
                <span className="slide-tag">Famílias</span>{" "}
                <strong className="slide-titulo">
                  Rotina, limites e vínculo — <em>juntos</em>.
                </strong>
              </figcaption>
            </figure>
            <figure className="carrossel-slide slide-maecrianca">
              <StaticImage
                src="../images/carrossel-mae-crianca.jpg"
                alt="Mãe rindo com a filha pequena enquanto brincam de blocos no chão da sala"
                layout="constrained"
                width={1280}
                quality={80}
              />
              <figcaption className="fig-dir">
                <span className="slide-tag slide-tag-sage">
                  Crianças maiores
                </span>{" "}
                <strong className="slide-titulo">
                  A parentalidade continua — as perguntas <em>também</em>.
                </strong>
              </figcaption>
            </figure>
          </div>
          <div className="carrossel-controles">
            <button
              type="button"
              className="carrossel-seta"
              onClick={() => navegar(-1)}
              aria-label="Slide anterior"
            >
              <svg className="icone" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <div className="carrossel-dots" aria-hidden="true">
              {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
                <span key={i} className={i === ativo ? "ativo" : undefined} />
              ))}
            </div>
            <button
              type="button"
              className="carrossel-seta"
              onClick={() => navegar(1)}
              aria-label="Próximo slide"
            >
              <svg className="icone" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Atendimento
