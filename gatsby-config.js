module.exports = {
  siteMetadata: {
    title: `Tech387`,
    description: `We develop the most demanding and ambitious software projects of the 21st century.`,
    author: `Tech387`,
    keywords: `app development companies, app development, sarajevo, bih, bosnia, bosnia and hercegovina, mobile app, software, app programming, phone app development, development of apps, app development app, cell phone app development, programming apps, developing phone apps`,
    siteUrl: `https://tech387.com/`,
    image: `/images/faviconTech387.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FAFAFA`,
        theme_color: `#FAFAFA`,
        display: `minimal-ui`,
        icon: `src/images/faviconTech387.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rubik`
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    'gatsby-plugin-page-transitions',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  
  ],
}
