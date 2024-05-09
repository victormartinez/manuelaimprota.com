import styled from "styled-components"

export const Anchor = styled.a`
`

export const Button = styled.button`
  background-color: #9c6644;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #D4A373;
  }

  &:focus {
    outline: none;
  }
`