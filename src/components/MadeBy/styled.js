import styled from "styled-components"

export const MadeByContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 0.6em 0 0.5em 0;
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
