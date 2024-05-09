import styled from "styled-components"
import {LogoWhatsapp} from "@styled-icons/ionicons-solid"

export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    width: 60px;
    height: 60px;
    
    bottom:40px;
    right:40px;

    background-color:#25d366;
    color:#FFF;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
    z-index:100;

    &:hover {
        background-color: #40916c;
    }
`

export const Icon = styled(LogoWhatsapp)`
    width: 45px;
    height: 45px;

`
