import React from "react"
import WhatsAppButton from "../WhatsAppButton"

import * as S from "./styled"
import Accordion from "../Accordion"


const Faq = ( ) => {
  const whatsLink = `https://wa.me/71999889229?text=`
  const accordionData = [
    {
      title: (
        <>Qual o valor da consulta?</>
      ),
      content: (
        <>
          <p>O Conselho Federal de Psicologia (CRP) determina que os valores das sessões não sejam divulgados publicamente. Portanto, ao entrar em contato, forneço valores e informações adicionais sobre pacotes.</p>
        </>
      )
    },
    {
      title: (
        <>Quanto tempo dura cada sessão?</>
      ),
      content: (
        <>
          <p>
            A duração de cada sessão de terapia pode variar dependendo das necessidades individuais do cliente. Geralmente, elas duram em torno de 50 minutos.
          </p>
        </>
      )
    },
    {
      title: (
        <>De que forma a terapia pode me ajudar?</>
      ),
      content: (
        <>
          <p>A terapia pode ajudar a desenvolver habilidades de enfrentamento, melhorar o autoconhecimento, explorar questões subjacentes, oferecer suporte emocional, desenvolver relacionamentos saudáveis, definir metas e planos de ação, além de fornecer gerenciamento de crises.</p>
        </>
      )
    },
    {
      title: (
        <>Quais aspectos podemos tratar nas sessões?</>
      ),
      content: (
        <>
          <p>A terapia é indicada para qualquer pessoa que busque melhorar sua saúde mental, lidar com desafios emocionais ou encontrar crescimento pessoal. Isso inclui problemas como ansiedade, depressão, estresse, trauma, relacionamentos, autoestima, entre outros.</p>
        </>
      )
    },
    {
      title: (
        <>Terapia online funciona?</>
      ),
      content: (
        <>
          <p>
          Sim, a terapia online pode ser eficaz para muitas pessoas. Ela oferece conveniência e acessibilidade, permitindo que você receba apoio terapêutico no conforto de sua própria casa. O processo é idêntico ao da terapia presencial, a diferença é que você pode fazer de qualquer lugar que você esteja, pelo celular, computador, tablet... etc.
          </p>
        </>
      )
    },
    {
      title: (
        <>Quero marcar uma sessão, como faço?</>
      ),
      content: (
        <>
          <p>
            Basta enviar uma mensagem clicando <a class="faq-whats" href={whatsLink} target="_blank" rel="noopener noreferrer">aqui</a> para que eu possa te acolher e ajudar no processo de alcançar a sua melhor versão.
          </p>
        </>
      )
    },
    {
      title: (
        <>Posso fazer as consultas por meio do meu plano de saúde?</>
      ),
      content: (
        <>
          <p>
            Meus atendimentos não tem vínculo com planos de saúde, mas você pode solicitar reembolso de acordo com a política do seu plano.
          </p>
        </>
      )
    },
    {
      title: (
        <>Como é realizado o pagamento?</>
      ),
      content: (
        <>
          <p>
            O pagamento acontece de forma antecipada adquirindo um pacote de sessões que o paciente utiliza durante o mês. Ele pode ser feito por meio de Transferência ou Pix.
          </p>
        </>
      )
    },
  ]

  return (
    <S.FaqContainer id="faqSession">
      <S.Title>{`Dúvidas Frequentes`}</S.Title>

      <S.AccordionSection>
          {accordionData.map((data, i) => (
            <Accordion
              key={i}
              title={data.title}
              content={data.content}
            />
          ))}
      </S.AccordionSection>
      <br />
      <WhatsAppButton 
        label="Fale comigo"
        text="Olá, poderia me dar mais informações sobre as sessões de terapia?"
        big={true}
      />
    </S.FaqContainer>
  )
}


export default Faq