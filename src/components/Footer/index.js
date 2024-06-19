import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import WhatsAppButton from "../WhatsAppButton"

import * as S from "./styled"

const Footer = ( {instagram } ) => {
  const whatsLink = `https://wa.me/71999889229?text=Olá, gostaria de mais informações sobre a terapia.`
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterBox>
          <S.ImageBox>
            <StaticImage
                src="../../images/logo-with-crp.svg"
                width={350}
                formats={["auto", "webp", "avif"]}
                alt={`Manuela Improta - Psicóloga Clínica - CRP 03/30689`}
                style={{}}
            />
          </S.ImageBox>
        </S.FooterBox>

        <S.FooterBox>
          <S.FooterBoxTitle>Faça seu agendamento</S.FooterBoxTitle>
          <S.FooterBoxDescription>O processo terapêutico te ajudará a fortalecer sua saúde mental, lidar com os desafios e cultivar uma maior autoconsciência.</S.FooterBoxDescription>
          <WhatsAppButton 
            label="Entrar em contato" icon={false} 
            text="Olá, estou entrando em contato para saber mais informações sobre as sessões de terapia."
          />
        </S.FooterBox>
        
        <S.FooterBox>
          <S.FooterBoxTitle>Contato</S.FooterBoxTitle>
          <S.FooterBoxDescription>Sinta-se à vontade para me seguir nas redes sociais.</S.FooterBoxDescription>
          <S.Social>
            <S.SocialIcons>
              <S.Link href={instagram} target="_blank" rel="noopener noreferrer">
                <S.InstagramIcon />
              </S.Link>
              
              <S.Link href={whatsLink} rel="noopener noreferrer">
                <S.WhatsIcon />
              </S.Link>
            </S.SocialIcons>
          </S.Social>
        </S.FooterBox>

      </S.FooterContent>

      <S.Divider />

      <S.Copyright>Copyright © {new Date().getFullYear()}. Todos os direitos reservados.</S.Copyright>
      <S.MadeBy>Desenvolvido por <S.MadeByLink href="https://wa.me/71992690760?text=Olá, vi o site de Manuela Improta e gostaria de mais informações para criar o meu site." rel="noopener noreferrer">VM Marketing</S.MadeByLink></S.MadeBy>
    </S.FooterContainer>
  )
}

export default Footer