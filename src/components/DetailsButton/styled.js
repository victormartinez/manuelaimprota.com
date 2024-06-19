import React from 'react'

import styled from "styled-components"

export const Anchor = styled.a`
`

export const Button = styled.button`
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
