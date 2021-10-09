const axios = require('axios');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = async function ({actions, graphql}) {

  // Data querying: unstructurized.
  // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  // const posts = res.data;

  /* ###############################################
  CREATE PAGES FOR THE MARKDOWNS.
   """"""""""""""""""""""""""""""""""""""""""""""""*/

  // Data querying: with Graphql.
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  const { nodes } = result.data.allMarkdownRemark;

  nodes.forEach(node => {
    actions.createPage({
      path: node.fields.slug,
      component: require.resolve(`./src/templates/blog.jsx`),
      context: {
        slug: node.fields.slug
      }
    })
  });
   /*""""""""""""""""""""""""""""""""""""""""""""""""
   ############################################### */

  // create post
  // posts.forEach(post => {
  //   actions.createPage({
  //     path: `/post/${post.id}`,
  //     component: require.resolve(`./src/templates/post.jsx`),
  //     context: {post}
  //   })
  // })

  // create posts
  // actions.createPage({
  //   path: '/posts',
  //   component: require.resolve(`./src/templates/posts.jsx`),
  //   context: {posts: posts, body: "this is the body"}
  // })

} // *END* pageCreating.

// Registering nodes
exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {

  // Data querying.
  // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  // const posts = res.data;

  //posts.forEach(post => {
  //  const node = {
  //    title: post.title,
  //    body: post.body,
  //    // id must be globally unique.
  //    id: createNodeId(`Post-${post.id}`),
  //    // id of the parent Node.
  //    parent: null,
  //    // list of children Nodes' ids.
  //    children: [],
  //    //
  //    internal: {
  //      // unique node type.
  //      type: 'Post',
  //      // a hash or short digital summary of the node.
  //      contentDigest: createContentDigest(post),
  //      // raw content of this node.
  //      content: JSON.stringify(post)
  //    }
  //  };
  //  actions.createNode(node);
  //})

}


// exports.createSchemaCustomization = ({actions}) => {
//   const typeDefs = `
//     type PostJson {
//         title: String
//         body: String
//         id: ID
//     }
//     input TitleFilter {
//         eq: String
//         in: String
//     }
//     `
//   actions.createTypes(typeDefs);
// }

// exports.createResolvers = ({createResolvers}) => {
//   const resolvers = {
//     Query: {
//       allPost: {
//         type: ["PostJson"],
//         args: {
//           filter: `input PostFilterInput { title: TitleFilter }`,
//           limit: 'Int'
//         },
//         async resolve(source, args, context, info) {
//           const {filter} = args;
//           const {title} = filter || {};
//           const {eq} = title || {};

//           const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//           const posts = res.data;

//           if (eq) {
//             return posts.filter(post => (post.title === eq))
//           }
//           return posts;
//         }
//       }
//     }
//   }
//   createResolvers(resolvers);
// };


// Constructing slug.
exports.onCreateNode = ({node, getNode, actions}) => {
  // Check for the markdown node.
  if (node.internal.type === 'MarkdownRemark') {
    // adding `basePath` will remove `posts/` from the slug.
    const slug = createFilePath({node, getNode});
    // add a field to the node.
    actions.createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
};
