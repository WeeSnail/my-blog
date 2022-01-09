const {createFilePath} = require('gatsby-source-filesystem');

/* ###############################################
INIT CREATE PAGES FOR THE MARKDOWNS.
""""""""""""""""""""""""""""""""""""""""""""""""*/
exports.createPages = async function ({actions, page, graphql}) {

  // Data querying: with Graphql.
  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            tags
          }
        }
      }
      tagsGroup: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  const {postsRemark} = result.data;

  // Pagination.
  const paginationItems = 2;
  const numberOfPages = Math.ceil(postsRemark.nodes.length / paginationItems);

  Array.from({length: numberOfPages}).forEach((_, i) => {
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
  postsRemark.nodes.forEach(post => {
    actions.createPage({
      path: `/posts/${post.frontmatter.slug}`,
      component: require.resolve(`./src/templates/post.template.jsx`),
      context: {
        slug: post.frontmatter.slug
      }
    })
  });

  // Create tags pages.
  const {tagsGroup} = result.data;
  tagsGroup.group.forEach(tag => {
    actions.createPage({
      path: `/tag/${tag.fieldValue.toLowerCase()}`,
      component: require.resolve(`./src/templates/tags.template.jsx`),
      context: {
        tag: tag.fieldValue,
      },
    });
  });

};
/*""""""""""""""""""""""""""""""""""""""""""""""""
END pageCreating.
############################################### */
