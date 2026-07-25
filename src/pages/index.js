import * as React from "react"
import { graphql } from "gatsby"

import "../styles/global.css"

import Seo from "../components/seo"
import TopBar from "../components/TopBar"
import Hero from "../components/Hero"
import PraVoce from "../components/PraVoce"
import Sobre from "../components/Sobre"
import Atendimento from "../components/Atendimento"
import Abordagem from "../components/Abordagem"
import Confianca from "../components/Confianca"
import Faq from "../components/Faq"
import Guias from "../components/Guias"
import CtaFinal from "../components/CtaFinal"
import Rodape from "../components/Rodape"

const IndexPage = () => {
  React.useEffect(() => {
    const elementos = document.querySelectorAll(".reveal")
    if (!("IntersectionObserver" in window)) {
      elementos.forEach(el => el.classList.add("visivel"))
      return
    }
    const observador = new IntersectionObserver(
      entradas => {
        entradas.forEach(entrada => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel")
            observador.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )
    elementos.forEach(el => observador.observe(el))
    return () => observador.disconnect()
  }, [])

  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <PraVoce />
        <Sobre />
        <Atendimento />
        <Abordagem />
        <Confianca />
        <Faq />
        <Guias />
        <CtaFinal />
      </main>
      <Rodape />
    </>
  )
}

export default IndexPage

export const Head = ({ data }) => {
  const { title, description, keywords, siteUrl } = data.site.siteMetadata
  return (
    <Seo
      title={title}
      description={description}
      keywords={keywords.join(", ")}
      siteUrl={siteUrl}
    />
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        keywords
      }
    }
  }
`
