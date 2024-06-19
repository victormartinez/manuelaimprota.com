import styled from "styled-components"
import { Clock } from "@styled-icons/fa-solid/Clock"

export const Anchor = styled.a`
`

export const Button = styled.button`
  background-color: #5EA164;
  color: #fff;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${({ big }) => big && `
    font-size: 20px;
  `}

  &:hover {
    background-color: #6AB38A;
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

export const Icon = styled(Clock)`
  height: 1em;
  margin-right: 0.5em;
`
