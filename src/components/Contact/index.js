import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import WhatsAppButton from "../WhatsAppButton"

import * as S from "./styled"

const Contact = () => {
  return (
    <S.ContactContainer>
      <S.Title>{`Lembre-se:`}</S.Title>
      <br />
      <S.SubTitle>{`sua jornada não precisa ser solitária`}</S.SubTitle>
      <S.ImageBox>
        <StaticImage
          src="../../images/ornament.png"
          loading="eager"
          quality={100}
          formats={["auto", "webp", "avif"]}
          style={{ 
            height: `100%`,
            marginBottom: `2em`
          }}
        />
      </S.ImageBox>
      <WhatsAppButton 
        label="Entrar em contato"
        message="Olá, gostaria de ter mais detalhes sobre a terapia." 
      />
    </S.ContactContainer>
  )
}
export default Contact