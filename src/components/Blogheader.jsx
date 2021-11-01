import React, {useRef, useEffect} from 'react';
import {Link} from 'gatsby';
import ToggleMode from './ThemeToggle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import * as hamburgerStyles from './Blogheader.module.scss';

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


    const Header = styled.header`
        display: flex;
        justify-content: space-between;
        border: 1px solid blue;
    `
    const Brand = styled.div`
        color: white;
        font-size: 1.5rem;
        align-self: center;
        padding: 1rem 0;
        border: 1px solid green;
    `
    const Nav = styled.nav`
            display: flex;
            flex-direction: row;
            align-self: center;
            ul {
                list-style: none;
                li {
                    display: inline-block;
                    padding: 1rem;
                    a {
                        text-decoration: none;
                        color: white;
                        font-family: 'Lato', sans-serif;
                        font-weight: 700;
                        text-transform: uppercase;
                        font-size: 1.5rem;
                    }
                    a::after {
                        content: '';
                        display: block;
                        background-color: white;
                        height: 0.2em;
                        width: 0;
                        margin-left: auto;
                        transition: all ease-out 0.2s;
                    }
                    a:hover::after {
                        width: 100%;
                        margin-left: 0;
                        margin-right: auto;
                    }
                }
            }
    `
    const Hright = styled.div`
        display: flex;
        align-items: center;
    `

    const Hleft = styled.div`
        display: flex;
        align-items: center;
        span:nth-child(1) {
            border: 1px solid red;
            display: none;
            @media(max-width: 796px) {
                border: 1px solid yellow;
                display: block;
            }
        }

    `
    return (
        <>
            <Header className="header">
                <Hright className="header_right">
                    <Brand className="header__home">
                        <a href="#" className="home__link">LOGO</a>
                    </Brand>

                    <div className="header__menu">
                        <Nav>
                            <ul className="">
                                <li><a className="header__link">Home</a></li>
                                <li><a>About</a></li>
                            </ul>
                        </Nav>
                    </div>
                </Hright>

                <Hleft className="header_left">
                    <span className="header__hamburger">
                        <FontAwesomeIcon
                            className={`hamburger-expand ${hamburgerStyles.isActive}`}
                            icon="bars" />
                        <FontAwesomeIcon
                            className={`hamburger-collapse ${hamburgerStyles.isHidden}`}
                            icon="times" />
                    </span>
                    <span>
                        <ToggleMode className="is-flex is-align-self-center mr-0" />
                    </span>
                </Hleft>
            </Header>
        </>
    )
};

export default Blogheader;
