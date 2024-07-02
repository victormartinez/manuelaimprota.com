import React from "react"
import WhatsAppButton from "../WhatsAppButton"
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
            Sou Psicóloga Clínica e por meio da abordagem Junguiana ajudo meus pacientes a lidar desde questões como ansiedade, depressão e transtornos de humor até relacionamentos, falta de confiança e problemas familiares.            

            <br /><br />

            Às vezes, o primeiro passo pode parecer desafiador, mas saiba que você não está sozinho(a). A terapia pode transformar a sua jornada. Vamos conversar?
          </S.Description>
        </S.AboutTextBox>

        <S.SendMessageBox>
          <WhatsAppButton 
            label="Quero começar a minha jornada"
            text="Oi, acessei o seu site e gostaria de começar a minha jornada na terapia."
          />
          <S.DetailsButton onClick = {(e)=>{
            e.preventDefault();
              window.scrollTo({
                top: document.querySelector("#servicesSection").offsetTop,
                behavior: "smooth",
              });
            }
          }>
            Mais detalhes
          </S.DetailsButton>
        </S.SendMessageBox>
      </S.About>
    </S.AboutContainer>
  )
}

export default About