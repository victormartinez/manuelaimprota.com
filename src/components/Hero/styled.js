import media from "styled-media-query"
import styled from "styled-components"


export const HeroContainer = styled.div`
  display: flex;
  height: 40vh;
  align-items: end;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  text-align: center;

  background-image: url(/images/sofa-background-3.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
`

export const HeroTextBox = styled.div`
  text-align: center;
  width: 30vw;
  height: 40vh;
  padding: 1em 0.5em 0 0.5em;
  // background-color: rgba(255, 255, 255, 0.5);
`

export const Title = styled.h1`
  color: white;

  margin-bottom: 0.5em;
  font-size: 3rem;
  font-family: 'Tan Pearl', serif;
  font-weight: 100;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.5);

  ${media.lessThan("large")`
    font-size: 1.2rem;
  `}
`