import * as React from "react"

const FRASES = [
  "“Me sinto uma péssima mãe.”",
  "“Me cobro o tempo inteiro, por tudo.”",
  "“Amo meu filho, mas sinto falta de quem eu era.”",
  "“Ando ansiosa — e nem sei bem por quê.”",
  "“Meu parto não foi como eu sonhei.”",
  "“Cuido de todo mundo — e fico por último na minha própria lista.”",
]

const FASES = [
  { titulo: "Tentante", texto: "a ansiedade da espera e dos “e se”." },
  {
    titulo: "Gestante",
    texto: "medos, expectativas e um corpo inteiro mudando.",
  },
  {
    titulo: "Puérpera",
    texto: "a sobrecarga, o choro sem hora marcada e a culpa.",
  },
  {
    titulo: "Mãe & mulher",
    texto: "identidade, ambivalência e a mulher além do papel de mãe.",
  },
  {
    titulo: "Você, além dos papéis",
    texto: "ansiedade, autocobrança, relacionamentos e escolhas.",
  },
  {
    titulo: "Sem “jeito certo” de ser mulher",
    texto:
      "identidade, expectativas dos outros e o reencontro com o que você quer.",
  },
]

const PraVoce = () => (
  <section className="s-pra-voce" id="pra-voce">
    <div className="container">
      <p className="kicker reveal">Pra mãe. Pra mulher. Pra você.</p>
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
        É normal sentir isso. Sentir não te torna uma mãe ruim nem uma mulher
        fraca — <strong>te torna gente</strong>. E existe um espaço pra olhar
        pra tudo isso sem julgamento, e com menos culpa.
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
