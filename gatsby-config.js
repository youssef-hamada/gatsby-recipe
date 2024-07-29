/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */


const dotenv = require("dotenv")

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}




module.exports = {
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`images`,
        path:`${__dirname}/src/assests/images`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve:`gatsby-source-contentful`,
      options:{
        spaceId:`9s2qz2t8fugl`,
        accessToken:process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
      
  ],
}
