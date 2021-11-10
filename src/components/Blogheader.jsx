import React from 'react';
import {Link} from 'gatsby';
import ToggleMode from './ThemeToggle';
import Logo from './Logo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import * as hamburgerStyles from './Blogheader.module.scss';
import {useTheme} from './ThemeProvider';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  padding-top: 0;
  margin-bottom: 1.2rem;
  @media(max-width: 796px) {
    justify-content: space-between;
  }
`;

const Brand = styled.div`
  a {
    line-height: initial;
    font-size: 1.5rem;
    font-weight: 700;
  }
  svg {
    // height: 1.3rem;
    width: 3rem;
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
  const {theme} = useTheme();

  return (
    <Header className="header">

      <Brand className="header__brand">
        <Link to="/" className="brand__link">
          <Logo colors={{
            stroke: `${theme.fontColor}`,
            fill: `${theme.background}`,
            inner: `#000`
          }}/>
        </Link>
      </Brand>

      <Menu className="header__menu">
        <ul className="">
          <li><Link to="/about" className="menu__link">about</Link></li>
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
