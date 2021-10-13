import React from 'react';
import Blogheader from './Blogheader';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="container is-max-desktop">
      <Blogheader />
      {children}
      <Footer />
      </div>
    );
}

export default Layout;
