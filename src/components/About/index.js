import React from "react"
import WhatsAppButton from "../WhatsAppButton"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const About = ( { whatsLink } ) => {
  const imgAlt = `Manuela Improta - Psicóloga Clínica e Pós-Graduanda em Psicologia Analítica`
  return (
    <S.AboutContainer>
      <S.AboutImage>
        <S.ImageBox>
          <StaticImage
            src="../../images/aboutImageProfile.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt={imgAlt}
            style={{ 
              height: `100%`,
            }}
          />
          <S.AboutImageCaption>{imgAlt}</S.AboutImageCaption>
        </S.ImageBox>  
      </S.AboutImage>

      <S.About>
        <S.AboutTextBox>
          <S.Title>{`Olá, eu sou Manuela Improta`}</S.Title>
          <S.Description>Às vezes, o primeiro passo para buscar apoio emocional pode parecer desafiador, mas saiba que você não está sozinho(a). Estou aqui para oferecer um espaço seguro e acolhedor, onde podemos explorar juntos os desafios que você enfrenta. Sua jornada de autoconhecimento e bem-estar começa com um simples gesto: <S.SendMessageLink href={whatsLink} target="_blank">enviar uma mensagem</S.SendMessageLink>. Estou ansiosa para ouvir sua história e oferecer o suporte necessário para que você possa florescer.</S.Description>
        </S.AboutTextBox>

        <S.SendMessageBox>
          <WhatsAppButton 
            label="Enviar uma mensagem"
            whatsLink={whatsLink}
          />
        </S.SendMessageBox>
      </S.About>
    </S.AboutContainer>
  )
}

export default About