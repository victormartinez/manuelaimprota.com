import React from "react"
import WhatsAppButton from "../WhatsAppButton"

import * as S from "./styled"

const Services = (  ) => {
  return (
    <S.Container id="ajuda">
      <S.Title>Como posso te ajudar</S.Title>
      <S.Description>
        A terapia permite dar suporte aos mais variados espectros da sua vida, desde enfrentar desafios emocionais como ansiedade e depressão até lidar com questões complexas de relacionamento, autoestima e desenvolvimento pessoal. Meus pacientes me procuram para lidar com problemas variados:
      </S.Description>
      
      <S.Services>
        <S.Svc>
          <S.P>Ansiedade</S.P>
        </S.Svc>
        <S.Svc>
          <S.P>Depressão</S.P>
        </S.Svc>
        <S.Svc>
          <S.P>Estresse</S.P>
        </S.Svc>
        <S.Svc>
          <S.P>Burnout</S.P>
        </S.Svc>
        <S.Svc>
          <S.P>Relacionamentos</S.P>
        </S.Svc>
        <S.Svc>
          <S.P>Questões <br /> Familiares</S.P>
        </S.Svc>
        <S.Svc>
          <S.P>Insônia</S.P>
        </S.Svc>
        <S.Svc>
          <S.P>Auto-Estima <br />&<br /> Confiança</S.P>
        </S.Svc>
        <S.Svc>
          <S.P>Desafios <br />Profissionais</S.P>
        </S.Svc>
        <S.Svc>
          <S.P>Luto <br />&<br /> Perda</S.P>
        </S.Svc>

      </S.Services>
      <WhatsAppButton 
        label="Tenho questões para compartilhar"
        text="Olá, estou procurando terapia para lidar com algumas questões. Pode me dar mais informações?"
      />
    </S.Container>
  )
}

export default Services