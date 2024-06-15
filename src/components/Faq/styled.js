import media from "styled-media-query"
import styled from "styled-components"


export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  padding: 100px 0 50px 0;
`

export const Title = styled.h2`
  margin-bottom: 1em;
  font-size: 2rem;
  font-family: 'Tan Pearl', serif;

  ${media.lessThan("large")`
    font-size: 1.2rem;
  `}
`

export const AccordionSection = styled.div`
  width: 50vw;

  ${media.lessThan("medium")`
    width: 90%;
  `}

  p {
    max-width: 100%;
  }

  .faq-whats {
    color: #25d366;

    &:visited {
      color: #25d366;
    }
  
    &:hover {
      text-decoration: none;
    }
  }

  
`