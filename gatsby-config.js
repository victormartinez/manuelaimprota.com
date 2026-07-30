/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Manuela Improta — Psicóloga Perinatal & Feminina · Online, Brasil todo`,
    description: `Psicoterapia online para mulheres — na maternidade e no universo feminino — e orientação parental. Base científica, zero julgamento. CRP 03/30689.`,
    author: `Manuela Improta`,
    siteUrl: `https://manuelaimprota.com`,
    instagram: `https://instagram.com/improtamanuela`,
    keywords: [
      "psicóloga",
      "psicologia perinatal",
      "psicologia feminina",
      "maternidade",
      "tentante",
      "gestante",
      "puérpera",
      "pós-parto",
      "orientação parental",
      "terapia online",
      "psicoterapia",
      "saúde mental",
      "junguiana",
      "ansiedade",
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Manuela Improta — Psicóloga Perinatal & Feminina`,
        short_name: `Manuela Improta`,
        description: `Psicoterapia online para mulheres — na maternidade e no universo feminino — e orientação parental.`,
        lang: `pt-BR`,
        start_url: `/`,
        background_color: `#fbf8f3`,
        theme_color: `#c97b5c`,
        display: `standalone`,
        icon: `src/images/icon-manifest.png`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://manuelaimprota.com`,
        sitemap: `https://manuelaimprota.com/sitemap-index.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
  ],
}
