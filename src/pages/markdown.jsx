import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';

const Markdown = ({data}) => {
  return (
    <Layout>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.nodes.map(node =>
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}
            <span> - {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      )}
    </Layout>
  )
}

export const querty = graphql`
query {
  allMarkdownRemark {
    totalCount
    nodes {
      id
      frontmatter {
        title
        date
      }
      excerpt
    }
  }
}
`

export default Markdown;
