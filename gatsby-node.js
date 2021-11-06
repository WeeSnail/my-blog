const {createFilePath} = require('gatsby-source-filesystem');

/* ###############################################
INIT CREATE PAGES FOR THE MARKDOWNS.
""""""""""""""""""""""""""""""""""""""""""""""""*/
exports.createPages = async function ({actions, page, graphql}) {

  // Data querying: with Graphql.
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  const {nodes} = result.data.allMarkdownRemark;

  const paginationItems = 2;
  const numberOfPages = Math.ceil(nodes.length / paginationItems);

  Array.from({length: numberOfPages}).forEach((_, i) => {
    // Pagination.
    const pageNumber = i + 1;
    // Create the pagination page.
    actions.createPage({
      path: pageNumber === 1 ? `/posts` : `/posts/${pageNumber}`,
      component: require.resolve(`./src/templates/pagination.template.jsx`),
      context: {
        limit: paginationItems,
        skip: i * paginationItems,
        currentPage: pageNumber,
        numberOfPages
      }
    });
  });

  // Create posts' pages form md.
  nodes.forEach(node => {
    actions.createPage({
      path: `/posts/${node.frontmatter.slug}`,
      component: require.resolve(`./src/templates/post.template.jsx`),
      context: {
        slug: node.frontmatter.slug
      }
    })
  });
}
/*""""""""""""""""""""""""""""""""""""""""""""""""
END pageCreating.
############################################### */
