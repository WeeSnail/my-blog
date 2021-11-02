import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/Layout';
import PostListing from '../components/PostListing';

const Pagination = ({pageContext, data}) => {
  const {limit, currentPage, numberOfPages} = pageContext;
  const {nodes} = data.allMarkdownRemark;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numberOfPages;

  const prevPage = () => {
    let num = currentPage - 1;
    return num > 1 ? num : `/posts`;
  };

  const nextPage = () => {
    let num = currentPage + 1;
    return num > numberOfPages ? `/posts/${numberOfPages}` : `/posts/${num}`;
  };

  return (
    <Layout>

      <PostListing posts={nodes} />

      <Link to={prevPage()}
        rel="prev"
        aria-disabled={isFirst}
        disabled={isFirst}
        className="button is-small">Previous</Link>

      <Link to={nextPage()}
        rel="next"
        aria-disabled={isLast}
        disabled={isLast}
        className="button is-small">Next</Link>

    </Layout>
  )
};

export const query = graphql`
query MyQuery($skip: Int!, $limit: Int!) {
  allMarkdownRemark(
    limit: $limit,
    skip: $skip,
    sort: { order: DESC, fields: frontmatter___date }) {
    nodes {
      id
      frontmatter {
        subtitle
        title
        slug
        date(formatString: "DD MMMM, YYYY")
        author
      }
    }
  }
}
`;

export default Pagination;
