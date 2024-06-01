import styled from "styled-components"
import media from "styled-media-query"
import {QuotesLeft} from "@styled-icons/icomoon"

export const TestimonyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 60%;
  padding: 3em 0 1em 0;

  background-color: #E2D8CF;
  background-image: url(/images/sofa-background-bw.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;

  ${media.lessThan("medium")`
    background-image: None;
  `}
`

export const Title = styled.h2`
  margin-bottom: 1em;
  font-size: 2rem;
  font-family: 'Tan Pearl', serif;
  color: white;

  ${media.lessThan("medium")`
    color: #212529;
  `}
`

export const Testimonials = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  ${media.lessThan("medium")`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `}
`

export const Testimony = styled.div`
  display: flex;
  flex-direction: column;
  font-style: italic;
  font-size: 1.1rem;
  width: 35vw;

  border-radius: 10px;
  margin-bottom: 2em;
  background-color: #797d62;

  ${media.lessThan("medium")`
    width: 90%;
  `}
`

export const QuoteText = styled.p`
  text-align: center;
  padding: 1em 3em; 
  line-height: 1.3rem;
  color: white;
`

export const QuotesLeftIcon = styled(QuotesLeft)`
  width: 2em;
  margin-left: 0.5em;
  color: white;
`