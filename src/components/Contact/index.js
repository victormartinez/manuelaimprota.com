import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Contact = ( ) => {
  return (
    <S.ContactContainer>
      <S.Title>Sua jornada de autoconhecimento e bem-estar</S.Title>
      <br />
      <S.SubTitle>começa agora</S.SubTitle>
      <S.ImageBox>
        <StaticImage
          src="../../images/ornament-black.png"
          loading="eager"
          quality={100}
          formats={["auto", "webp", "avif"]}
          style={{ 
            height: `100%`,
            marginBottom: `2em`
          }}
        />
      </S.ImageBox>
    </S.ContactContainer>
  )
}
export default Contact