import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/Layout';
import PostListing from '../components/PostListing';
import styled from 'styled-components';


const Main = styled.main`
  border: 1px solid var(--box-border);
  box-shadow: -0.2rem 0.2rem var(--box-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Span = styled.span`
  padding: 0.75rem;
  display: block;
`;

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

      <Main>
        <PostListing posts={nodes} />
        <Span>
          <Link to={prevPage()}
            rel="prev"
            aria-disabled={isFirst}
            disabled={isFirst}
            className="pagination-btn previous">Previous</Link>

          <Link to={nextPage()}
            rel="next"
            aria-disabled={isLast}
            disabled={isLast}
            className="pagination-btn next">Next</Link>
        </Span>
      </Main>

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
