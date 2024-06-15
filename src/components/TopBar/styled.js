import { Link } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"


export const TopBarHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 0.5em 0;
  background-color: #fff;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 99999;
  
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;
`

export const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80em;
  
  ${media.lessThan("medium")`
    width: 100%;
    justify-content: center;
  `}
`

export const Nav = styled.nav`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;

  ${media.lessThan("medium")`
    display: none;
  `}
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  color: black;
`

export const NavItem = styled.li`
  list-style-type: none;
  margin-right: 1.6em;
  font-size: 1.1rem;
  
  &:hover {
    color: #9c6644;  
    border-bottom: 1px solid #9c6644;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  
  &:visited {
    color: black; 
  }

  &:hover {
    border-bottom: none;
    color: #9c6644;  
  }
`

export const SendMessageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  height: 100%;
  
  ${media.lessThan("medium")`
    display: none;
  `}
`