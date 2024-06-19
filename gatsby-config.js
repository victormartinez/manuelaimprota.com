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
    title: `Psicóloga Clínica`,
    description: `Psicóloga Manuela Improta | Ajudo você a cuidar da sua saúde mental e romper barreiras negativas que te impedem de alcançar seus objetivos.`,
    author: `Manuela Improta`,
    siteUrl: `https://manuelaimprota.com`,
    email: `manuelaimprotamdias@gmail.com`,
    instagram: `https://www.instagram.com/psimanuelaimprota/`,
    keywords: [
      "psicóloga",
      "psicólogo",
      "salvador",
      "psicologia",
      "terapia",
      "online",
      "psicoterapia",
      "saúde",
      "mental",
      "analítica",
      "jung",
      "ansiedade",
      "burnout",
      "depressão",
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
    `gatsby-plugin-styled-components`,
  ],
}
