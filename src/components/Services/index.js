import React from "react"

import * as S from "./styled"

const Services = () => {
  return (
    <S.Container>
      <S.Title>Como posso te ajudar</S.Title>
      <S.Description>
        A terapia permite dar suporte aos mais variados espectros da sua vida, desde enfrentar desafios emocionais como ansiedade e depressão até lidar com questões complexas de relacionamento, autoestima e desenvolvimento pessoal.
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

        <S.Description>
          Através do diálogo colaborativo e técnicas terapêuticas trabalharemos para identificar e compreender as origens dos desafios que você enfrenta, desenvolvendo estratégias para lidar com eles de maneira saudável e construtiva. Ao longo do processo terapêutico você aprenderá a cultivar uma maior autoconsciência, resiliência emocional e habilidades para promover mudanças positivas em sua vida.
        </S.Description>
        
      </S.Services>

    </S.Container>
  )
}

export default Services