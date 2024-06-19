import React from "react"
import WhatsAppButton from "../WhatsAppButton"
import DetailsButton from "../DetailsButton"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const About = (  ) => {
  const imgAlt = `Manuela Improta - Psicóloga Clínica`
  const imgDesc = `Pós-Graduanda em Psicologia Analítica`
  const crp = `CRP 03/30689`
  return (
    <S.AboutContainer id="sobre">
      <S.AboutImage>
        <S.ImageBox>
          <StaticImage
            src="../../images/aboutImageProfile.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt={imgAlt}
            height={450}
          />
          <S.AboutImageCaption>{imgAlt} <br /> { imgDesc } <br /> {crp}</S.AboutImageCaption>
        </S.ImageBox>  
      </S.AboutImage>

      <S.About>
        <S.AboutTextBox>
          <S.Title>{`Olá, eu sou Manuela Improta`}</S.Title>
          <S.Description>
            Sou Psicóloga Clínica e ajudo pessoas que buscam acolhimento para lidar com diversos desafios. Por meio da abordagem Junguiana ajudo meus pacientes a entenderem melhor a si mesmos e suas experiências. 

            <br /><br />
            
            Às vezes, o primeiro passo pode parecer desafiador, mas saiba que você não está sozinho(a). Sua jornada de autoconhecimento e bem-estar começa agora.
          </S.Description>
        </S.AboutTextBox>

        <S.SendMessageBox>
          <WhatsAppButton 
            label="Quero começar a minha jornada"
            text="Oi, acessei o seu site e gostaria de começar a minha jornada na terapia."
          />
          <DetailsButton label="Mais detalhes" />
        </S.SendMessageBox>
      </S.About>
    </S.AboutContainer>
  )
}

export default About