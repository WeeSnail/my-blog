module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "My blog",
        body: {
            content: 'Just some SEO content'
        },
    },
  plugins: [
    "gatsby-plugin-sass",
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
