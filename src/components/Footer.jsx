import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';


const FixedFooter = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

const Copyright = () => {
  const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }
    `)

  return (
    <footer>
      {'Copyright © '}
      <Link color="inherit" to={data.site.siteMetadata.siteUrl}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </footer>
  );
};

const Footer = () => {
  return (
    <FixedFooter>
      <div className="p-5">
        <nav className="level">
          <div className="level-item has-text-centered">
            <Copyright />
            <a href="/rss.xml" target="_blank">RSS</a>
          </div>
        </nav>
      </div>
    </FixedFooter>
  )
};


export default Footer;
