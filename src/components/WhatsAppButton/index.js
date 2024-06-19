import React from "react"
import * as S from "./styled"


const WhatsAppButton = ({ label, text, icon = true, big = false }) => {
  const link = `https://wa.me/71999889229?text=${text}`
  return (
    <S.Anchor href={link} target="_blank" rel="noopener noreferrer">
        <S.Button big={big}>
          { icon ? <S.Icon /> : ''}
          {label}
        </S.Button>
    </S.Anchor>
  )
}

export default WhatsAppButton