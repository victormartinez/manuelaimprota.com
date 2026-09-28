import * as React from "react"

import {
  waLink,
  MSG_FAQ_PRIMEIRA_CONVERSA,
  MSG_VALORES,
  reportWhatsAppConversion,
} from "./whatsapp"

/* `resposta` também alimenta o JSON-LD (FAQPage) em pages/index.js, por isso
   fica só texto; o link de WhatsApp vem à parte, em `whatsapp` */
export const PERGUNTAS = [
  {
    pergunta: "Como funciona o atendimento online?",
    resposta:
      "As sessões têm 50 minutos e acontecem semanalmente, por videochamada, em um espaço seguro e sigiloso. Você só precisa de um lugar tranquilo e internet. Atendo mulheres de todo o Brasil.",
  },
  {
    pergunta: "Preciso ser mãe para fazer terapia com você?",
    resposta:
      "Não. A psicologia feminina olha para a mulher inteira: relacionamentos, trabalho, identidade, fases da vida. A maternidade é uma das portas — não a única. Você não precisa ser mãe, nem querer ser, para esse espaço ser seu.",
  },
  {
    pergunta: "Como é a primeira conversa?",
    resposta:
      "É pelo WhatsApp e sem compromisso: pra gente se conhecer, você tirar suas dúvidas e entender se faz sentido caminharmos juntas. Se fizer, a gente combina o melhor horário pra primeira sessão.",
    whatsapp: {
      mensagem: MSG_FAQ_PRIMEIRA_CONVERSA,
      rotulo: "Conversar no WhatsApp →",
    },
  },
  {
    pergunta: "Quanto custa?",
    resposta:
      "Os valores e as formas de pagamento eu te passo direto no WhatsApp, junto com os horários disponíveis — é rapidinho.",
    whatsapp: { mensagem: MSG_VALORES, rotulo: "Me chama no WhatsApp →" },
  },
  {
    pergunta: "Terapia é só pra quando a gente está mal?",
    resposta:
      "Não. Terapia também é cuidado e prevenção — um espaço pra se entender antes de a corda apertar. Você não precisa estar no fundo do poço para começar.",
  },
  {
    pergunta: "Você atende homens?",
    resposta:
      "Na psicoterapia individual, atendo mulheres. Na orientação parental, sim: o espaço é para mães, pais e cuidadores.",
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
            <p>
              {item.resposta}
              {item.whatsapp && (
                <a
                  className="link-seta faq-link"
                  href={waLink(item.whatsapp.mensagem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={reportWhatsAppConversion}
                >
                  {item.whatsapp.rotulo}
                </a>
              )}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default Faq
