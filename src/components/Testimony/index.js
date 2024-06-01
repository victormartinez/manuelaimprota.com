import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const Testimony = () => {
  return (
    <S.TestimonyContainer>
      <S.Title>Depoimentos</S.Title>

      <S.Testimonials>
        <S.Testimony>
          <S.QuotesLeftIcon />
          <S.QuoteText>
            A terapia transformou minha vida. Ela me ajuda a superar desafios emocionais que eu enfrentava há anos. Estou muito grata pelo apoio e orientação que recebi durante nosso tempo juntos. <br /> - N.D.
          </S.QuoteText>
        </S.Testimony>
        <S.Testimony>
          <S.QuotesLeftIcon />
          <S.QuoteText>
            As habilidades terapêuticas me permitiram explorar questões profundas e encontrar soluções para problemas que pareciam insuperáveis. Sinto-me mais forte e mais confiante graças às nossas sessões. <br /> - A.F.
          </S.QuoteText>
        </S.Testimony>
      </S.Testimonials>
      <S.Testimonials>
        <S.Testimony>
          <S.QuotesLeftIcon />
          <S.QuoteText>
            Encontrar a terapia foi um verdadeiro divisor de águas para mim. A atenção me ajudou a reconectar comigo mesma e a enfrentar meus medos de frente. Estou em um lugar muito melhor emocionalmente. <br /> - M.B.
          </S.QuoteText>
        </S.Testimony>
        <S.Testimony>
          <S.QuotesLeftIcon />
          <S.QuoteText>
            Depois de anos lutando contra a ansiedade, finalmente decidi procurar ajuda profissional. Estou tão feliz por ter seguido esse caminho. Sinto que tenho as ferramentas para lidar com minha ansiedade de forma saudável e construtiva. <br /> - J.F.
          </S.QuoteText>
        </S.Testimony>
      </S.Testimonials>
    </S.TestimonyContainer>
  )
}

Testimony.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
}

export default Testimony