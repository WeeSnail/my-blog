import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import {graphql, Link} from 'gatsby';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Gitalk from 'gatsby-plugin-gitalk';
import '@suziwen/gitalk/dist/gitalk.css';

const PostWrapper = styled.article`
  .post-content {
    table {
      border: 1px solid #ddd;
      border-collapse: collapse;
      border-spacing: 0;
    }

    p {
      margin: 15px 0;
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: bold;
      margin: 0.9rem 0;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.7rem;
    }

    ul {
      list-style: disc;

      li {
        margin-left: 10px;
      }

    }

    th {
      border: 1px solid #ddd;
    }

    tr:nth-child(odd) {
      background-color: #efefef;
    }

    td {
      border: 1px solid #ddd;
      line-height: 1.4285714;
      padding: 8px;
    }
  }
`;

const PostTemplate = ({data, pageContext}) => {
  const {frontmatter} = data.markdownRemark;
  let gitalkConfig = {
    title: data.markdownRemark.frontmatter.title
  }
  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={frontmatter.subtitle}
        coverImage={frontmatter.coverImage}
      />

      <PostWrapper>
        <Link to="/">
          <FontAwesomeIcon className="arrow-icon" icon="long-arrow-alt-left" />
          back to home
        </Link>

        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}>
        </div>

      </PostWrapper>
      <Gitalk options={gitalkConfig}/>

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
