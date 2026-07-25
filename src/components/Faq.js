import * as React from "react"

const PERGUNTAS = [
  {
    pergunta: "Como funciona o atendimento online?",
    resposta:
      "As sessões têm 50 minutos e acontecem semanalmente, por videochamada, em um espaço seguro e sigiloso. Você só precisa de um lugar tranquilo e internet. Atendo mulheres de todo o Brasil.",
  },
  {
    pergunta: "Quanto custa?",
    resposta:
      "Seguindo as orientações do Conselho Federal de Psicologia, os valores não são divulgados publicamente. Me chama no WhatsApp que te conto tudo — valores, horários e como começar.",
  },
  {
    pergunta: "Maternidade é o único tema?",
    resposta:
      "Não. A psicologia feminina olha para a mulher inteira: relacionamentos, trabalho, identidade, fases da vida. A maternidade é uma das portas — não a única. Você não precisa ser mãe, nem querer ser, para esse espaço ser seu.",
  },
  {
    pergunta: "Você atende homens?",
    resposta:
      "Na psicoterapia individual, atendo mulheres. Na orientação parental, sim: o espaço é para mães, pais e cuidadores.",
  },
  {
    pergunta: "Terapia é só pra quando a gente está mal?",
    resposta:
      "Não. Terapia também é cuidado e prevenção — um espaço pra se entender antes de a corda apertar. Você não precisa estar no fundo do poço para começar.",
  },
]

const Faq = () => (
  <section className="s-faq" id="perguntas">
    <div className="container container-estreito">
      <p className="kicker reveal">Perguntas frequentes</p>
      <h2 className="reveal">
        O que toda mulher me pergunta <em>antes de começar</em>.
      </h2>
      <div className="faq reveal">
        {PERGUNTAS.map(item => (
          <details key={item.pergunta}>
            <summary>{item.pergunta}</summary>
            <p>{item.resposta}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default Faq
