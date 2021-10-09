import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';


const Blogs = ({ data }) => {
  return (
    <Layout>
      <ul>
        {
          data.allFile.nodes.map(node => (
            <li key={node.relativePath}>
              <p>{node.relativePath}</p>
              <p>{node.prettySize}</p>
              <p>{node.extension}</p>
              <p>{node.birthTime}</p>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

// Query for: allFiles,
// relativePath, prettySize, extension. birthTime
export const query = graphql`
query {
  allFile {
    nodes {
      relativePath
      prettySize
      extension
      birthTime(fromNow: true)
    }
  }
}
`

export default Blogs;
