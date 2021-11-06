import React from 'react';
import Layout from '../components/Layout';
import FeaturedPost from '../components/FeaturedPost';
import PostListing from '../components/PostListing';
import Seo from '../components/Seo';
import {graphql, Link} from 'gatsby';
import styled from 'styled-components';

const Main = styled.main`
  border: 1px solid var(--box-border);
  box-shadow: -0.2rem 0.2rem var(--box-shadow);
  padding: 2rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid var(--box-border);
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
  transition: box-shadow 0.2s ease 0s, transform 0.2s ease 0s;
  &:hover {
    box-shadow: -0.3rem 0.3rem 0 var(--box-shadow);
    // outline: 2px solid var(--box-shadow);
    transform: translate(4px, -4px);
  }
`;

const IndexPage = ({data}) => {
  return (
    <Layout>

      <Seo title={`Home`} description={`welcome to my blog`} />

      { /* Shows two featured posts.*/}
      { /*
      <div className="columns">
        {data.allMarkdownRemark.nodes.slice(0, 2).map(node => (
          <div key={node.id} className="column">
            <FeaturedPost post={node} />
          </div>
        ))}
      </div>
          */ }

      { /* List of posts*/}
      <Main className="">
        <PostListing posts={data.allMarkdownRemark.nodes} />
        { /* Read more section: goes to paginated page */}
        <span className="column is-9">
          <Button className="read-more">
            <Link to="/posts">
              Read More
            </Link>
          </Button>
        </span>
      </Main>

    </Layout>
  )
}

export const querty = graphql`
query IndexQuery {
  allMarkdownRemark(limit: 2, sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      id
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        slug
        subtitle
        author
      }
    }
  }
}
`

export default IndexPage;
