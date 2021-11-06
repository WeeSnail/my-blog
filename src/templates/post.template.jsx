import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import {graphql, Link} from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as postStyles from './post-template.module.scss';

const PostTemplate = ({ data, pageContext }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Layout>
            <Seo
                title={frontmatter.title}
                description={frontmatter.subtitle}
                coverImage={frontmatter.coverImage}
        />
        <article>
          <Link to="/">
            <FontAwesomeIcon className="arrow-icon" icon="long-arrow-alt-left" />
            Go back
          </Link>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <div
                className={postStyles.postContent}
                dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}>
                </div>
        </article>
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
