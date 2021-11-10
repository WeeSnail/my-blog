import React from 'react'
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import {graphql} from 'gatsby';
import Seo from '../components/Seo';
import styled from 'styled-components';


const Main = styled.main`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--box-border);
  box-shadow: -0.2rem 0.2rem var(--box-shadow);
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
    line-height: 1.8em;
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

const About = ({}) => {
  return (
    <Layout>
      <Main className="about-main">
        <Seo title={`About`} />
        <Logo colors={{}} />

        <h2 style={{display: 'list-item'}}>Who am I?</h2>

        <p><span>&#128075;</span>Hi, my name is Anes, I'm a Front-End Developer from Tunisia with a keen
          interest in graphics, designs, UI, and animations.
        </p>

        <br />

        <p>A blundering user of Linux, tiling window managers, and VIM. I'm
          always on the hunt for the best development workflow.</p>

        <h2 style={{display: 'list-item'}}>About the blog</h2>

        <p>This is the place where I'll be writing about my journey striding
          through the woods of web development, served from the perspective
          of a self-taught developer <span>&#128104;&#8205;&#127859;</span>
          along with a healthy dose of some tips and notes about VIM, Linux, UI topics and
          God knows what (<em>books reviews? cooking recipes?
            rants?</em>&nbsp;&nbsp;<span>&#129300;</span> prolly!).</p>

        <p>I'm still learning about much of the stuff, and I found out that the
          best way to better understand something is to talk or write about it,
          so the majority of my posts will be more like a personal inner talk than
          guides or tutorials :)</p>

        <p>The technical reason behind the existence of this blog is for it to serve as
          a playground for hacking on Gatsbyjs and SSG(<small>and also to have
            something to put on my portfolio<span>&#129323;</span></small>)</p>
        <h2 style={{display: 'list-item'}}>How was this blog built?</h2>
        <p>The blog's initial scaffolding was done using a combination of <a href="https://github.com/gatsbyjs/gatsby-starter-minimal" target="_blank">Gatsby's minimal starter</a> and <a href="https://github.com/jgthms/bulma" target="_blank">Bulma</a>. It also features the use of <a href="https://github.com/styled-components/styled-components" target="_blank">styled-components</a>, <a href="https://github.com/css-modules/css-modules" target="_blank">CSS Modules</a>, SEO, RSS feeds, theming, PWA support and more.</p>
        <p>Again, the main purpose is to experiment with different plugins, UI elements, colors, etcetera. You can find the <a href="https://github.com/WeeSnail/my-blog" target="_blank">code base</a> on Github.</p>

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

