import styled from "styled-components"
import media from "styled-media-query"


export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  width: 65em;

  ${media.lessThan("large")`
    flex-direction: column;
    align-items: center;
    width: 80vw;
  `}

`

export const AboutTextBox = styled.div`
  padding-top: 0;
  margin-left: 4em;
  color: #212529;
  width: 50em;

  ${media.lessThan("medium")`
    width: 100%;
    margin-left: 0;
  `}

  ${media.greaterThan("medium")`
    width: 40em;
    margin-left: 0;
  `}

`

export const Title = styled.h2`
  margin-top: 1em;
  margin-bottom: 0.4em;
  font-size: 2rem;
  font-family: 'Satisfy', cursive;
  color: #212529;

  ${media.lessThan("large")`
    text-align: center;
  `}  
`

export const Description = styled.p`
  font-size: 1.4rem;
  margin: 0 auto;
  line-height: 1.5;

  ${media.lessThan("large")`
    text-align: center;
    font-size: 1.2rem;
  `}
`

export const AboutImage = styled.div`
  margin-left: 1em;
  img {
    border-radius: 20px;
  }  
`

export const ImageBox = styled.div`  
  ${media.lessThan("medium")`
    width: 60vw;
    margin: 0 auto;
  `}

  ${media.between("medium", "large")`
    width: 40vw;
  `}

  ${media.greaterThan("large")`
    width: 20em;
  `}
`

export const SendMessageLink = styled.a`
  color: #9c6644;
  &:visited {
    color: #9c6644;
  }
`

export const About = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    text-align: center;
  `}
`

export const SendMessageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 28em;  
  margin-top: 1em;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}

`

export const AboutImageCaption = styled.figcaption`
  font-size: 0.9rem;
  line-height: 1rem;
  margin-top: 0.2rem;
  text-align: center;
  font-style: italic;
  color: #6c757d;
  margin-right: 2em;
`

export const DetailsButton = styled.button`
  background-color: #555555;
  color: #fff;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 9em;

  ${media.lessThan("medium")`
    margin-top: 1em;
  `}

  &:hover {
    background-color: #aaaaaa;
    transform: scale(1.1);
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    
  }

  &:focus {
    outline: none;
  }
`
