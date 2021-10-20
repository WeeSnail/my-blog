import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import {graphql} from 'gatsby';
import './post.template.scss';

const PostTemplate = ({data, pageContext}) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
    <Seo title={frontmatter.title} description={frontmatter.subtitle} coverImage={frontmatter.coverImage}/>
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
      subtitle
      coverImage
    }
    }
  }
`

export default PostTemplate;
