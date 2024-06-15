import * as React from "react"

import { graphql } from 'gatsby'

import Layout from "../components/layout"
import GlobalStyles from "../styles/global"
import Seo from "../components/seo"
import Services from "../components/Services"
import TopBar from "../components/TopBar"
import About from "../components/About"
import Testimony from "../components/Testimony"
import Faq from "../components/Faq"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Phrase from "../components/Phrase"
import WhatsAppFloating from "../components/WhatsAppFloating"
import TherapyOnline from "../components/TherapyOnline"

const IndexPage = ({ data }) => {

    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    const author = data.site.siteMetadata.author
    const email = data.site.siteMetadata.email
    const instagram = data.site.siteMetadata.instagram
    const whatsLink = data.site.siteMetadata.whatsLink
    const keywords = data.site.siteMetadata.keywords

    return (
      <>
        <Seo
          title={`${author} | ${title}`}
          description={`${description}`}
          keywords={keywords.join(", ")}
        />
      <Layout>
        <GlobalStyles />
        <TopBar whatsLink={whatsLink} />
        <Phrase />
        <About whatsLink={whatsLink} />
        <Services />
        <TherapyOnline whatsLink={whatsLink} />
        <Testimony />
        <Faq whatsLink={whatsLink} />
        <Contact whatsLink={whatsLink} />
        <Footer 
          email={email}
          instagram={instagram}
          whatsLink={whatsLink}
        />
        <WhatsAppFloating whatsLink={whatsLink} />
      </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
        email
        instagram
        whatsLink
        keywords
      }
    }
  }
`