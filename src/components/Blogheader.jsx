import React, {useRef, useEffect} from 'react';
import {Link} from 'gatsby';
import ToggleMode from './ThemeToggle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import * as hamburgerStyles from './Blogheader.module.scss';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.5rem 1.5rem;
  margin-bottom: 1.4rem;
  border: 1px solid var(--box-border);
  box-shadow: var(--box-shadow) -0.3rem 0.3rem;
  @media(max-width: 796px) {
    justify-content: space-between;
  }
`;


const Hleft = styled.div`
  display: flex;
  align-items: center;
`;

const Brand = styled.div`
  a {
    line-height: initial;
    font-size: 3.5rem;
    font-weight: 700;
  }
  svg {
    height: 1.3rem;
    width: 1.3rem;
    margin-left: -0.2em;
  }
`;

const Menu = styled.nav`
  ul {
    list-style: none;
    li {
      display: inline-block;
      margin-left: 1.5rem;
      a {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.2rem;
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
`;

const Hright = styled.div`
  span:nth-child(1) {
    border: 1px solid red;
    display: none;
  }
`;

const Blogheader = () => {
  // const burger = useRef();
  // const navMenu = useRef();
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
      <Header className="header">
      <Hleft className="header_left">
        <Brand className="header__brand">
          <Link to="/" className="brand__link">A</Link>
          <svg>
            <circle cx="10" cy="12.8" r="8" fill="#444" />
          </svg>
          </Brand>
        </Hleft>

        <Menu className="header__menu">
        <ul className="">
            <li><a className="menu__link">about</a></li>
          </ul>
      </Menu>

      <Hright className="header_right">
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
        </Hright>

      </Header>
  )
};

export default Blogheader;
