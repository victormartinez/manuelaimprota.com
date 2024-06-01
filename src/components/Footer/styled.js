import styled from "styled-components"

import {Instagram} from "@styled-icons/simple-icons"
import {Email} from "@styled-icons/material-outlined"
import {Whatsapp} from "@styled-icons/icomoon"

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #B38A6A;
  height: 38vh;
`

export const ImageContainer = styled.div`
  width: 145px;
  height: 100px;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Copyright = styled.span`
  margin-top: 0.5em;
`

export const SubCopy = styled.span`
  margin-top: 0.5em;
`

export const SocialTitle = styled.div`
  text-align: center;
  margin-top: 1em;
`

export const ContactTitle = styled.h3`
  font-weight: bold;
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  height: 5em;
`

export const SocialIcons = styled.div`
  margin-top: 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5em;
`

export const EmailIcon = styled(Email)`
  width: 2em;
  margin-right: 0.5em;
`

export const InstagramIcon = styled(Instagram)`
  width: 1.5em;
  margin-right: 0.6em;

`

export const WhatsIcon = styled(Whatsapp)`
  width: 1.5em;
`

export const Link = styled.a`
  color: #000;

  &:visited {
    color: #000;
  }

  &:hover {
    color: #fff;
  }
`
