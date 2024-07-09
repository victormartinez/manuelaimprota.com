import styled from "styled-components"
import media from "styled-media-query"

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5em 0 5em 0;
`

export const Title = styled.h2`
  font-size: 2rem;
  text-align: center;

  font-family: 'Tan Pearl', serif;

  ${media.lessThan("medium")`
    line-height: 1.2em;
  `}
`

export const ImageBox = styled.div`
  width: 20em;
`