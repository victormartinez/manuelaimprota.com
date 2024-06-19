import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import WhatsAppButton from "../WhatsAppButton"

import * as S from "./styled"


const TopBar = ( ) => {
  return (
    <S.TopBarHeader>
      <S.TopBarContainer>
        <StaticImage
            src="../../images/logo-with-crp.svg"
            width={350}
            formats={["auto", "webp", "avif"]}
            alt={`Manuela Improta - Psicóloga Clínica`}
            style={{}}
        />

        <S.Nav>
          <S.NavList>
            <S.NavItem>
              <S.NavLink to={``}
              onClick = {(e)=>{
                e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
              }
              >Início</S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink to={``}
                onClick = {(e)=>{
                e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#sobre").offsetTop - 150,
                    behavior: "smooth",
                  });
                }
              }>Sobre</S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink to={``}
              onClick = {(e)=>{
                e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#ajuda").offsetTop,
                    behavior: "smooth",
                  });
                }
              }
              >Atuação</S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink to={``}
                onClick = {(e)=>{
                  e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector("#atendimento").offsetTop,
                      behavior: "smooth",
                    });
                  }
                }>Agendamento</S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink to={``}
                onClick = {(e)=>{
                  e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector("#testimonySection").offsetTop - 100,
                      behavior: "smooth",
                    });
                  }
                }>Depoimentos</S.NavLink>
            </S.NavItem>
            <S.NavItem>
              <S.NavLink to={``}
                onClick = {(e)=>{
                  e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector("#faqSession").offsetTop - 60,
                      behavior: "smooth",
                    });
                  }
                }>FAQ</S.NavLink>
            </S.NavItem>
          </S.NavList>
        </S.Nav>

        <S.SendMessageBox>
          <WhatsAppButton 
            label="Agende sua sessão"
            text="Olá, acessei o seu site e gostaria de mais informações sobre a terapia."
          />
        </S.SendMessageBox>

      </S.TopBarContainer>
    </S.TopBarHeader>
  )
}

export default TopBar