import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const TopBar = () => {
  return (
    <S.TopBarHeader>
      <S.TopBarContainer>
        <StaticImage
            src="../../images/logo-manuela-novo.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt={`Manuela Improta - Psicóloga Clínica`}
            style={{
            }}
        />
      </S.TopBarContainer>
    </S.TopBarHeader>
  )
}

export default TopBar