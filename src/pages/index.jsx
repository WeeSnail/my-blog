import React from 'react';
import Layout from '../components/Layout';
import FeaturedPost from '../components/FeaturedPost';
import PostListing from '../components/PostListing';
import Seo from '../components/Seo';
import { graphql, Link } from 'gatsby';


const IndexPage = ({data}) => {
  console.log(data);
  return (
    <Layout>

      <Seo title={`Home`} description={`welcome to my blog`} />

      { /* Shows two featured posts.*/}
      { /*
      <div className="columns">
        {data.allMarkdownRemark.nodes.slice(0, 2).map(node => (
          <div key={node.id} className="column">
            <FeaturedPost post={node} />
          </div>
        ))}
      </div>
          */ }

      { /* List of posts*/}
      <div className="p-4">
        <PostListing posts={data.allMarkdownRemark.nodes} />
      </div>

    </Layout>
  )
}

export const querty = graphql`
query IndexQuery {
  allMarkdownRemark(limit: 2, sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      id
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        slug
        subtitle
        author
      }
    }
  }
}
`

export default IndexPage;
