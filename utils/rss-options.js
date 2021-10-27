module.exports = {
    feeds: [
        {
            // Output custom RSS feed structure.
            serialize: ({query: {allMarkdownRemark}}) => {

                return allMarkdownRemark.edges.map(edge => {

                    const url = `${process.env.BASE_URL}/posts/${edge.node.frontmatter.slug}`
                    return Object.assign({}, edge.node.frontmatter, {
                        description: edge.node.frontmatter.subtitle,
                        url: url,
                        guiid: url,
                        custom_elements: [{"content:encoded": edge.node.html}]
                    })

                })

            },
            query: `
          {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] },)
            {
              edges {
                node {
                  html
                  frontmatter {
                    title
                    subtitle
                    slug
                    date
                  }
                }
              }
            }
          }
          `,
            title: 'My RSS FEED',
            output: '/rss.xml',
        },
    ]
}
