import React from "react"

import * as S from "./styled"


const WhatsAppFloating = () => {
  const message = `Olá, gostaria de saber mais detalhes sobre a terapia.`
  const phoneNumber = `71999889229`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <S.Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <S.Icon />
    </S.Link>
  )

}

export default WhatsAppFloating