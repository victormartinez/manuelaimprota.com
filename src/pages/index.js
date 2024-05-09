import * as React from "react"

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
import MadeBy from "../components/MadeBy"

const IndexPage = () => (
  <Layout>
    <GlobalStyles />
    <TopBar />
    <Phrase />
    <About />
    <Services />
    <Testimony />
    <Faq />
    <Contact />
    <Footer />
    <WhatsAppFloating />
    <MadeBy />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
