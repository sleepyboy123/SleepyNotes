const config = {
  start_url: `/`,
  background_color: `#663399`,
  theme_color: `#663399`,
};

module.exports = {
  siteMetadata: {
    title: `SleepyNotes`,
    description: `Markdown based wiki site`,
    author: `@sleepyboy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-image`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `./wiki`,
      },
    },
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: config.start_url,
        background_color: config.background_color,
        theme_color: config.theme_color,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/gatsby-icon.png`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'gatsby-wiki-template',
    //     short_name: 'gatsby-wiki',
    //     start_url: config.start_url,
    //     background_color: config.background_color,
    //     theme_color: config.theme_color,
    //     display: `standalone`,
    //   },
    // },
    'gatsby-plugin-offline',
  ],
};
