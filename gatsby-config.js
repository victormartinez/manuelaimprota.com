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
    title: `Manuela Improta — Psicóloga online · Saúde mental para mulheres`,
    description: `Psicoterapia online para mulheres: ansiedade, autocobrança e relacionamentos. Acompanhamento perinatal para tentantes, gestantes e puérperas. CRP 03/30689.`,
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
      "acompanhamento perinatal",
      "saúde mental da mulher",
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
        name: `Manuela Improta — Saúde mental para mulheres`,
        short_name: `Manuela Improta`,
        description: `Psicoterapia online para mulheres: ansiedade, autocobrança e relacionamentos. Acompanhamento perinatal para tentantes, gestantes e puérperas.`,
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
