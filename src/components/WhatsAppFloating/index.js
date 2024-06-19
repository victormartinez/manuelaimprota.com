import React from "react"

import * as S from "./styled"


const WhatsAppFloating = ( ) => {
  const whatsLink = `https://wa.me/71999889229?text=Olá, gostaria de saber mais sobre a terapia.`
  return (
    <S.Link href={whatsLink} target="_blank" rel="noopener noreferrer">
      <S.Icon />
    </S.Link>
  )

}

export default WhatsAppFloating