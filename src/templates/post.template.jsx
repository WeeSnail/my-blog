import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import './post.template.scss';

const PostTemplate = ({ data, pageContext }) => {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}>
      </div>
  </Layout>
)
}

export const query = graphql`
query($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
    }
    }
  }
`

export default PostTemplate;
