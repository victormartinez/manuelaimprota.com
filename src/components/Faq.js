import * as React from "react"

import { whatsAppProps } from "./whatsapp"

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
      cta: "faq-primeira-conversa",
      rotulo: "Conversar no WhatsApp →",
    },
  },
  {
    pergunta: "Quanto custa?",
    resposta:
      "Seguindo as orientações do Conselho Federal de Psicologia (CFP), os valores das sessões particulares não são divulgados publicamente. Os atendimentos podem ser feitos de forma avulsa ou em pacotes mensais, e emito recibo para que você solicite reembolso no seu plano de saúde (caso seu convênio ofereça livre escolha). Me chama no WhatsApp que te explico os valores e horários disponíveis.",
    whatsapp: { cta: "faq-preco", rotulo: "Me chama no WhatsApp →" },
  },
  {
    pergunta: "Você atende por plano de saúde?",
    resposta:
      "Os atendimentos são particulares, o que garante sessões de 50 minutos reais, acompanhamento personalizado e sigilo no seu ritmo. Porém, se você tem plano de saúde com modalidade de reembolso, eu emito o recibo necessário para você ser ressarcida parcial ou integralmente pelo seu convênio.",
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
                  {...whatsAppProps(item.whatsapp.cta)}
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
