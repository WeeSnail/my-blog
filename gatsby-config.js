const rss = require('./utils/rss-options');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {
  siteMetadata: {
    title: "My blog",
    description: 'My own Personal blog',
    body: {
      content: 'Just some SEO content'
    },
    siteUrl: process.env.BASE_URL,
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-feed`,
      options: rss
    },
    // File sourcing
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      }
    },
    // File transformer (transform sourced files)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
};
