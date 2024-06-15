import styled from "styled-components"
import media from "styled-media-query"


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(179, 138, 106);
  
  margin: 0 auto;
  width: 100%;
  height: 60%;
  padding: 10em 0 4em 0;
  margin-bottom: 100px;
`


export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-family: 'Tan Pearl', serif;
  line-height: 3.5rem;
  width: 50vw;
  margin-bottom: 1em;

  ${media.lessThan("medium")`
    width: 85vw;
    font-size: 1.2rem;
    line-height: 2.2rem;
  `}
`

export const ImageBox = styled.div`
  width: 20em;
`