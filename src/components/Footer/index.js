import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Footer = ( {email, instagram, whatsLink} ) => {
  return (
    <S.FooterContainer>
      <StaticImage
          src="../../images/logo-m-brown.png"
          loading="eager"
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt={`Manuela Improta - Psicóloga Clínica`}
      />
      <S.Copyright>Copyright © {new Date().getFullYear()} - Manuela Improta</S.Copyright>
      <S.SubCopy>Psicóloga Clínica</S.SubCopy>
      <S.Social>
        <S.SocialTitle><S.ContactTitle>Contato</S.ContactTitle></S.SocialTitle>

        <S.SocialIcons>
          <S.Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <S.EmailIcon />
          </S.Link>
          
          <S.Link href={instagram} target="_blank" rel="noopener noreferrer">
            <S.InstagramIcon />
          </S.Link>
          
          <S.Link href={whatsLink} rel="noopener noreferrer">
            <S.WhatsIcon />
          </S.Link>
        </S.SocialIcons>
      </S.Social>
    </S.FooterContainer>
  )
}

export default Footer