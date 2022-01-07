import React from 'react';
import Blogheader from './Blogheader';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
      <div className="container mgh-medium layout">
        <Blogheader />
        {children}
        <Footer />
      </div>
    );
}

export default Layout;
