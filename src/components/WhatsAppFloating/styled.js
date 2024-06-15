import styled from "styled-components"
import media from "styled-media-query"
import {LogoWhatsapp} from "@styled-icons/ionicons-solid"

export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    width: 75px;
    height: 75px;
    
    bottom: 50px;
    right: 150px;

    background-color:#25d366;
    color:#FFF;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
    z-index:100;

    ${media.lessThan("medium")`
        bottom: 30px;
        right: 20px;
    `}

    &:hover {
        background-color: #40916c;
        transform: scale(1.1);
        -webkit-transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;
        transition: all 500ms ease;
    }
`

export const Icon = styled(LogoWhatsapp)`
    width: 50px;
    height: 50px;
`
