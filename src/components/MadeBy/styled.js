import styled from "styled-components"

export const MadeByContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 4vh;
  padding-top: 1.5em;
`

export const Description = styled.p`
  font-size: 0.8rem;
  font-weight: bold;  
`

export const Link = styled.a`
  display: inline;

  color: #3a6ea5;

  &:visited {
    color: #3a6ea5;
  }

  &:hover {
    color: #004e98;
  }
`
