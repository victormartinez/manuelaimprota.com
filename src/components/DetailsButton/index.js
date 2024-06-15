import React from "react"
import * as S from "./styled"


const DetailsButton = ({ label }) => {
  return (
    <S.Button onClick = {(e)=>{
      e.preventDefault();
        window.scrollTo({
          top: document.querySelector("#servicesSection").offsetTop,
          behavior: "smooth",
        });
      }
    }>
       {label}
    </S.Button>

  )
}

export default DetailsButton