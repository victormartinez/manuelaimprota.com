import styled from "styled-components"
import media from "styled-media-query"

import {Instagram} from "@styled-icons/simple-icons"
import {Whatsapp} from "@styled-icons/icomoon"


export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  padding-top: 2em;
  text-align: center;

  ${media.greaterThan("medium")`
    height: 40vh;
  `}

`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 65em;

  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: center;
    width: 100vw;
  `}
`

export const FooterBox = styled.div`
  width: 30%;

  ${media.lessThan("medium")`
    width: 80vw;
    margin-top: 3em;
  `}
`

export const ImageBox = styled.div`
  ${media.lessThan("medium")`
    display: none;
  `}
`

export const FooterBoxTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1em;
`

export const FooterBoxDescription = styled.p`
  margin-bottom: 0.5em;
  line-height: 1.2rem;
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  height: 5em;
`

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1em;
`

export const Link = styled.a`
  color: #000;

  &:visited {
    color: #000;
  }

`

export const InstagramIcon = styled(Instagram)`
  width: 1.5em;
  margin-right: 0.6em;

  &:hover {
    color: #C13584;
  }
`


export const WhatsIcon = styled(Whatsapp)`
  width: 1.5em;

  &:hover {
    color: #40916c;
  }
`

export const Divider = styled.hr`
  width: 50vw;
  font-color: #fefefe;
  margin-top: 2em;
`

export const Copyright = styled.p`
  margin-top: 0.5em;
  margin-bottom: 1em;
`

export const MadeBy = styled.p`
  padding-top: 1em;
  font-size: 0.7rem;
`

export const MadeByLink = styled.a`
  color: #000;

  &:visited {
    color: #000;
  }

  &:hover {
    font-weight: bold;
  }
`