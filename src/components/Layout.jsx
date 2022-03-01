import React from 'react';
import Blogheader from './Blogheader';
import Footer from './Footer';
import Seo from './Seo';

const Layout = ({children}) => {
    return (
      <div className="container mgh-medium layout">
      <Seo />
        <Blogheader />
        {children}
        <Footer />
      </div>
    );
}

export default Layout;
