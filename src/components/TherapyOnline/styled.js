import styled from "styled-components"
import media from "styled-media-query"
import {Check} from "@styled-icons/entypo/Check"
import { Clock } from "@styled-icons/fa-solid/Clock"


export const OuterRow = styled.div`
  padding: 150px 0 100px 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 65em;

  ${media.lessThan("large")`
    flex-direction: column;
    align-items: center;
    width: 90vw;
  `}
`

export const Title = styled.h2`
  margin-bottom: 1em;
  font-size: 2rem;
  font-family: 'Tan Pearl', serif;
  text-align: center;

  ${media.lessThan("medium")`
    line-height: 1.2em;
  `}
`

export const Description = styled.p`
  font-size: 1.3rem;
  margin: 0 auto;
  line-height: 1.5;
  text-align: center;
`

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: center;
    width: 80vw;
  `}
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  
  background-color: rgb(245, 237, 237);
  border-radius: 10px;

  width: 45%;
  height: 10em;
  margin-top: 2em;
  padding: 20px 10px 0 10px;

  ${media.lessThan("large")`
    flex-direction: column;
    width: 90vw;
    height: 12em;
  `}
`

export const BoxColored = styled.div`
  display: flex;
  flex-direction: column;
  
  background-color: rgb(179, 138, 106);
  border-radius: 10px;

  width: 45%;
  height: 12em;
  margin-top: 2em;
  padding: 20px 0 0 0;
`

export const BoxHeading = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1em;
  margin-left: 1em;
`

export const CheckIcon = styled(Check)`
    width: 1em;
`

export const ClockIcon = styled(Clock)`
    width: 1em;
    color: white;
`


export const P = styled.p`
  font-size: 1.1rem;
  line-height: 1.7rem;
  padding-left: 1em;
`


export const Row = styled.div`
    margin-top: 2em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`