import React from "react"
import WhatsAppButton from "../WhatsAppButton"

import * as S from "./styled"

const TherapyOnline = () => {
  return (
    <S.OuterRow id="atendimento">
      <S.Container>
        <S.Title>Agende seu atendimento online</S.Title>
        <S.Description>
          Nossas sessões online visam permitem que você tenha o acolhimento necessário independente de qual cidade residir. Através de técnicas terapêuticas trabalharemos para identificar e compreender as origens dos desafios que você enfrenta.
        </S.Description>
        <S.BoxContainer>
          <S.Box>
            <S.BoxHeading>Atendimento Particular</S.BoxHeading>
            <S.P><S.CheckIcon /> Sessões individuais</S.P>
            <S.P><S.CheckIcon /> Adultos e idosos</S.P>
            <S.P><S.CheckIcon /> Abordagem Junguiana para promover autoconhecimento e equilíbrio psicológico</S.P>
          </S.Box>
          <S.Box>
            <S.BoxHeading>No seu horário</S.BoxHeading>
            <S.P><S.CheckIcon /> De Segunda a Sábado</S.P>
            <S.P><S.CheckIcon /> Online, prático e respeitando seus horários</S.P>
            <S.P><S.CheckIcon /> Para brasileiros residindo no país e no exterior</S.P>
          </S.Box>
        </S.BoxContainer>
        <S.Row>
          <WhatsAppButton 
            label="Quero mais informações"
            text="Olá, gostaria de mais informações sobre a terapia."
            big={true}
          />
        </S.Row>
      </S.Container>
    </S.OuterRow>
  )
}

export default TherapyOnline