/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';

import LogoLink from './LogoLink';
import Burger from './Burger';
import WindowSize from '../../utils/window-size';
import useToggle from '../../utils/UseToggle';
import MenuLink from '../shared/MenuLink';

// import FadeIn from '../../utils/FadeIn';

const Navbar = () => {
  const theme = useTheme();
  const { width } = WindowSize();
  const [isBurger, setIsBurger] = React.useState(width < 900);
  const [isOpen, toggleMenu] = useToggle();

  const NavbarTag = styled('nav')`
    background-color: ${theme.color.white};
    position: fixed;
    width: 100%;
    z-index: 3;

    /* min-height: 4rem; */
    /* display: flex;
    justify-content: space-between;
    align-items: end; */

    .nav-brand {
      display: flex;
      justify-content: space-between;
      min-height: 4rem;
      width: 100%;
      z-index: 2;

      a figure {
        display: flex;
      }
    }
  `;

  React.useEffect(() => setIsBurger(width < 900), [width]);

  const props = useSpring({
    transform: isOpen ? 'translateY(0%)' : 'translateY(-130%)',
  });
  const burgerMenu = css`
    width: 100%;
    position: fixed;
    position: absolute;
    overflow: hidden;
    left: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    transform: translateY(-130%);
  `;

  const inLineMenu = css``;

  const styles = styled.div`
    ${isBurger ? burgerMenu : inLineMenu}
    left: 0;
    z-index: 1;
    transition: all 0.3s linear;
  `;

  const MenuWrapper = animated(styles);

  return (
    <NavbarTag role="navigation" aria-label="main-navigation">
      <div className="nav-brand">
        <LogoLink />
        {isBurger && <Burger toggleMenu={toggleMenu} />}
      </div>
      <MenuWrapper style={props}>
        <MenuLink variant="navbar" to="/about">
          Quienes somos
        </MenuLink>
        <MenuLink variant="navbar" to="/camper-vans">
          Camper vans
        </MenuLink>
        <MenuLink variant="navbar" to="/prices">
          Precios
        </MenuLink>
        <MenuLink variant="navbar" to="/conditions">
          Condiciones
        </MenuLink>
        <MenuLink variant="navbar" to="/FAQ">
          FAQ
        </MenuLink>
        {/* <MenuLink variant="navbar" to="/blog">
        Blog
      </MenuLink> */}
        <MenuLink variant="navbar" to="/contact">
          Contacto
        </MenuLink>
      </MenuWrapper>
    </NavbarTag>
  );
};

export default Navbar;
