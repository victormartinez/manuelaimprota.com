import React from "react"
import WhatsAppButton from "../WhatsAppButton"

import * as S from "./styled"

const TherapyOnline = () => {
  return (
    <S.OuterRow id="therapyOnlineSection">
      <S.Container>
        <S.Title>Agende seu atendimento online</S.Title>
        <S.Description>
        Através de técnicas terapêuticas trabalharemos para identificar e compreender as origens dos desafios que você enfrenta. Você aprenderá a cultivar uma maior autoconsciência, resiliência emocional e habilidades para promover mudanças positivas em sua vida.
        </S.Description>
        <S.BoxContainer>
          <S.Box>
            <S.BoxHeading>Atendimento Particular</S.BoxHeading>
            
            <S.P><S.CheckIcon /> Sessões individais, casais e família</S.P>
            <S.P><S.CheckIcon /> Adolescentes, adultos e idosos</S.P>
            <S.P><S.CheckIcon /> Acompanhamento de curto, médio e longo prazo</S.P>
          </S.Box>
          <S.Box>
            <S.BoxHeading>No seu horário</S.BoxHeading>
            <S.P><S.CheckIcon /> Seg-Sáb</S.P>
            <S.P><S.CheckIcon /> Online, prático e respeitando seus horários</S.P>
            <S.P><S.CheckIcon /> Para brasileiros residindo no país e no exterior</S.P>
          </S.Box>
        </S.BoxContainer>
        <S.Row>
          <WhatsAppButton 
            label="Agende sua sessão"
            whatsLink={``}
            icon={true}
          />
        </S.Row>
      </S.Container>
    </S.OuterRow>
  )
}

export default TherapyOnline