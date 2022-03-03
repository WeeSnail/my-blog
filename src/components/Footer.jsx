import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const FixedFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Copyright = () => {
  return (
    <footer>
      {'Copyright © '}
      <a color="inherit" href="https://www.anesmarzuki.com">
        anes marzuki
      </a>{' '}
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
            <Link to="/rss.xml" target="_blank">
              RSS
            </Link>
          </div>
        </nav>
      </div>
    </FixedFooter>
  );
};

export default Footer;
