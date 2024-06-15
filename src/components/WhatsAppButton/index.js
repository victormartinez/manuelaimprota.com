import React from "react"
import * as S from "./styled"


const WhatsAppButton = ({ whatsLink, label, icon = true }) => {
  return (
    <S.Anchor href={whatsLink} target="_blank" rel="noopener noreferrer">
        <S.Button>
          { icon ? <S.Icon /> : ''}
          
          {label}
        </S.Button>
    </S.Anchor>
  )
}

export default WhatsAppButton