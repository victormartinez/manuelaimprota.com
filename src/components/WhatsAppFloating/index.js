import React from "react"

import * as S from "./styled"


const WhatsAppFloating = ( { whatsLink }) => {
  return (
    <S.Link href={whatsLink} target="_blank" rel="noopener noreferrer">
        <S.Icon />
    </S.Link>
  )

}

export default WhatsAppFloating