import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"


const Phrase = () => {
  return (
    <S.Container>
      <S.Title>{`Ajudo você a cuidar da sua saúde mental e romper barreiras negativas que impedem de alcançar seus objetivos.`}</S.Title>

      <S.ImageBox>
        <StaticImage
            src="../../images/ornament-black.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            style={{ 
              height: `100%`,
            }}
          />
      </S.ImageBox>
    </S.Container>
  )
}
export default Phrase