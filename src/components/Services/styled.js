import styled from "styled-components"
import media from "styled-media-query"


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 65em;
  padding: 150px 0 0 0;


  ${media.lessThan("large")`
    flex-direction: column;
    align-items: center;
    width: 80vw;
  `}

`

export const Title = styled.h2`
  margin-bottom: 1em;
  font-size: 2rem;
  font-family: 'Tan Pearl', serif;
  text-align: center;
`

export const Description = styled.p`
  font-size: 1.3rem;
  margin: 0 auto;
  line-height: 1.5;
  text-align: center;

`

export const Services = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2em;
`


export const Svc = styled.div`
  display: flex;
  align-items: center;

  width: 10em;
  height: 3.5em;
  font-size: 1.1rem;
  text-align: center;

  border-radius: 10px;
  color: #9c6644;
  background-color: rgb(245, 237, 237);

  margin-bottom: 2em;

  ${media.lessThan("large")`
    width: 8em;
  `}

`


export const P = styled.p`
  margin: 0 auto;
`