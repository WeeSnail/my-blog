import React from 'react';
import { Link } from 'gatsby';
import ToggleMode from './ThemeToggle';

const Blogheader = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
                <Link className="navbar-item" to="/my_blog"></Link>
                <Link to="/" role="button" className="navbar-burger" aria-label="menu"
                    aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">

                <div className="navbar-start">
                    <Link to="/" className="navbar-item">
                        Home
                    </Link>
                    <Link to="/" className="navbar-item">
                        About
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <ToggleMode className="is-flex is-align-self-center mr-5" />
                        </div>
                    </div>
                </div>

            </div>

        </nav>
    )
};

export default Blogheader;
