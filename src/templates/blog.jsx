import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const Blog = ({ data, pageContext }) => {
  return (
    <Layout>
      <h1>I am Blog detail page</h1>
      <p>{pageContext.slug}</p>
      <div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
    } 
  }
`

export default Blog;
