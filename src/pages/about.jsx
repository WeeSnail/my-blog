import React from 'react'
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import {graphql} from 'gatsby';
import Seo from '../components/Seo';
import styled from 'styled-components';

const Main = styled.main`
  // font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--box-border);
  background-color: transparent;
  // box-shadow: -0.2rem 0.2rem var(--box-shadow);
  padding: 2rem 0.5rem;

  svg {
    width: 5rem;
    height: 5rem;
  }
  table {
    border: 1px solid #ddd;
    border-collapse: collapse;
    border-spacing: 0;
  }

  p {
    margin: 0.5rem 0;
    max-width: 42em;
    // line-height: 1.8em;
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
  span {
    font-size: 1.3em;
  }
  @media (max-width: 796px) {
    padding: 1.5rem;
  }
  text-align: center;
`;

const About = () => {
  return (
    <Layout>
      <Main className="about-main">
        <Seo title={`About`} />
        <Logo />

        <h2 style={{display: 'list-item'}}>About the blog</h2>

      <p>The writings are to be served from my own perspective(a self-taught blundering front-end developer 🐱).</p>

        <p>I'm  still learning about much of the stuff, so the majority of my
          articles are going to be more like a personal inner talk rather than
          guides or tutorials :)</p>

        <p>If you have any question please feel free to contact me or leave a comment ;)</p>

        <br />

        <h2 style={{display: 'list-item'}}>How was this blog built?</h2>
        <p>The blog's initial bootstrap was done using a combination of <a
          href="https://github.com/gatsbyjs/gatsby-starter-minimal"
          target="_blank" rel="noreferrer">Gatsby's minimal starter</a> and <a
            href="https://github.com/jgthms/bulma" target="_blank"
            rel="noreferrer">Bulma</a>. It also features the use of <a
            href="https://github.com/styled-components/styled-components"
            target="_blank" rel="noreferrer">styled-components</a>, <a
            href="https://github.com/css-modules/css-modules" target="_blank"
            rel="noreferrer">CSS Modules</a>, SEO, RSS feeds, theming, PWA
          support and more.</p>
        <p>The main purpose is to experiment with different plugins, UI elements, colors, etcetera. You can find the code base on my <a href="https://github.com/WeeSnail/my-blog" target="_blank" rel="noreferrer">Github.</a></p>

      </Main>
    </Layout>
  )
}

export const query = graphql`
query {
    site {
        siteMetadata {
            title
            body {
                content
            }
        }
    }
}
`

export default About;

