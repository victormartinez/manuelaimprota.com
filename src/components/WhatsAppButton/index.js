import React from "react"
import * as S from "./styled"


const WhatsAppButton = ({ message, label, size = 'P' }) => {
  const phoneNumber = `71999889229`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <S.Anchor href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <S.Button>{label}</S.Button>
    </S.Anchor>
  )
}

export default WhatsAppButton