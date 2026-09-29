import * as React from "react"

const FRASES = [
  "“Me cobro perfeição em tudo — nos relacionamentos, na carreira e na vida — e ando exausta de mim mesma.”",
  "“Dou conta do trabalho e da casa, mas por dentro sinto que vou pifar a qualquer momento.”",
  "“Me anulo nas minhas relações pra não desagradar ninguém.”",
  "“Me sinto uma péssima mãe.”",
  "“Cuido de todo mundo — e fico por último na minha própria lista.”",
  "“Amo meu filho, mas sinto falta de quem eu era.”",
]

const FASES = [
  {
    titulo: "Ansiedade & autocobrança",
    texto: "a mente que não desliga e a cobrança que nunca acaba.",
  },
  {
    titulo: "Relações & escolhas",
    texto: "relacionamentos, trabalho e decisões que pesam.",
  },
  {
    titulo: "Sem “jeito certo” de ser mulher",
    texto:
      "identidade, expectativas dos outros e o reencontro com o que você quer.",
  },
  {
    titulo: "Tentante & gestante",
    texto: "a espera, os medos e um corpo inteiro mudando.",
  },
  {
    titulo: "Puérpera",
    texto: "a sobrecarga, o choro sem hora marcada e a culpa.",
  },
  {
    titulo: "Mãe & mulher",
    texto: "identidade, ambivalência e a mulher além do papel de mãe.",
  },
]

const PraVoce = () => (
  <section className="s-pra-voce" id="pra-voce">
    <div className="container">
      <p className="kicker reveal">Pra você, em qualquer fase.</p>
      <h2 className="reveal">
        Se alguma dessas frases parece sua, esse espaço é <em>seu</em>.
      </h2>
      <div className="baloes">
        {FRASES.map(frase => (
          <p className="balao reveal" key={frase}>
            {frase}
          </p>
        ))}
      </div>
      <p className="validacao reveal">
        Sentir isso não é fraqueza nem falha —{" "}
        <strong>é sinal de que você anda carregando demais</strong>. E você não
        precisa carregar sozinha: existe um espaço pra olhar pra tudo isso sem
        julgamento.
      </p>
      <ul className="fases fases-6">
        {FASES.map(fase => (
          <li className="fase reveal" key={fase.titulo}>
            <h3>{fase.titulo}</h3>
            <p>{fase.texto}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default PraVoce
