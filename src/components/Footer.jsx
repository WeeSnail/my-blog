import React from 'react';
import { Link } from 'gatsby';

const Copyright = () => {
  return (
    <footer>
      {'Copyright © '}
      <Link color="inherit" to="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </footer>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="p-5">
        <nav className="level">
          <div className="level-item has-text-centered">
            <Copyright />
            <a href="/rss.xml" target="_blank">RSS</a>
          </div>
        </nav>
      </div>
    </footer>
  )
};

export default Footer;
