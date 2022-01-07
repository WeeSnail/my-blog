import React from 'react';
import Layout from '../components/Layout';
import PostListing from '../components/PostListing';
import Seo from '../components/Seo';
import {graphql, Link} from 'gatsby';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--box-border);
  // box-shadow: -0.2rem 0.2rem var(--box-shadow);
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

const Hero = styled.div`
  border: 1px solid var(--box-border);
  // box-shadow: -0.2rem 0.2rem var(--box-shadow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.2rem;
  // padding-left: 0.75rem;
  padding: 0.5rem 0;
  padding-left: 1.75rem;
  // color: var(--hero-font);
  // background-color: var(--hero-bg);
  h1 {
    font-size: 2em;
  }
`;

const IndexPage = ({data}) => {
  return (
    <Layout>

      <Seo title={`Home`} description={`welcome to my blog`} />

      <Hero className="hero">
        <span></span>
        <h1>Anes's Open Playground</h1>
        <h2>Front-end shenanigans, design, vim, Linux and more</h2>
      </Hero>

      { /* List of posts*/}
      <Main className="">
        <PostListing posts={data.allMarkdownRemark.nodes} />
        { /* Read more section: goes to paginated page */}
        <Button className="read-more">
          <Link to="/posts">
              Browse All
            </Link>
          </Button>
      </Main>

    </Layout>
  )
}

export const querty = graphql`
query IndexQuery {
  allMarkdownRemark(limit: 4, sort: {order: DESC, fields: frontmatter___date}) {
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
