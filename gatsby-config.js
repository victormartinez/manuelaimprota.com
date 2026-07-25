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
    description: `Psicoterapia online para mulheres — na jornada materna e nas questões do universo feminino — e orientação parental. Base científica, zero julgamento. CRP 03/30689.`,
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
  ],
}
