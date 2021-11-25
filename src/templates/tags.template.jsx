import React from 'react';
import {Link, graphql} from 'gatsby';

const Tags = ({pageContext, data}) => {
  const { tag } = pageContext;
  return (
    <h1>{pageContext.tag}</h1>
  )
};

export default Tags;

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

