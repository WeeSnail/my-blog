import React, {useRef, useEffect} from 'react';
import {Link} from 'gatsby';
import ToggleMode from './ThemeToggle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Blogheader = () => {

    const burger = useRef();
    const navMenu = useRef();

    // useEffect(() => {
    //     console.log(burger.current)
    //     burger.current.addEventListener('click', () => {
    //         burger.current.classList.toggle('is-active');
    //         navMenu.current.classList.toggle('is-active');
    //     });
    //     return () => {
    //         console.log('Done mounting!!')
    //     }
    // }, [])

    return (
        <header className="header header--is-active">
            <div className="header__brand">
                <a href="#" className="brand__link">HOME</a>
            </div>
            <div className="header__hamburger">
                <FontAwesomeIcon icon="bars" className="hamburger-expand" />
                <FontAwesomeIcon icon="times" className="hamburger-collapse hidden" />
            </div>
            <div className="header__menu">
                <nav>
                    <ul className="menu-list">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        // <nav className="navbar" role="navigation" aria-label="main navigation">

        //     <div className="navbar-brand">
        //         <Link className="navbar-item" to="/my_blog"></Link>
        //         <a role="button" className="navbar-burger" aria-label="menu"
        //             aria-expanded="false" data-target="navbarBasicExample" ref={burger}>
        //             <span aria-hidden="true"></span>
        //             <span aria-hidden="true"></span>
        //             <span aria-hidden="true"></span>
        //         </a>
        //     </div>

        //     <div id="navbarBasicExample" className="navbar-menu" ref={navMenu}>

        //         <div className="navbar-start">
        //             <Link to="/" className="navbar-item">
        //                 Home
        //             </Link>
        //             <Link to="/" className="navbar-item">
        //                 About
        //             </Link>
        //         </div>

        //         <div className="navbar-end">
        //             <div className="navbar-item">
        //                 <div className="buttons">
        //                     <ToggleMode className="is-flex is-align-self-center mr-5" />
        //                 </div>
        //             </div>
        //         </div>

        //     </div>

        // </nav>
    )
};

export default Blogheader;
