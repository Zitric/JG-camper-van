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

const Navbar = () => {
  const theme = useTheme();
  const { width } = WindowSize();
  const [isBurger, setIsBurger] = React.useState(null);
  const [isOpen, toggleMenu] = useToggle();

  React.useEffect(() => setIsBurger(width < 1045), [width]);

  const NavbarTag = styled('nav')`
    position: fixed;
    width: 100%;
    z-index: 3;
    background-color: ${theme.color.white};

    min-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: end;

    .nav-brand {
      background-color: ${theme.color.white};
      display: flex;
      justify-content: space-between;
      min-height: 4rem;
      z-index: 2;
    }
  `;

  const props = useSpring({
    transform: isOpen ? 'translateY(0%)' : 'translateY(-130%)',
  });

  const burgerMenu = css`
    width: 100%;
    position: fixed;
    position: absolute;
    overflow: hidden;
    top: 4.7rem;
    left: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    transform: translateY(-130%);
    z-index: -1;
  `;

  const inLineMenu = css`
    transform: translateY(0%) !important;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.7rem;
  `;

  const styles = styled.div`
    ${isBurger !== null ? (isBurger ? burgerMenu : inLineMenu) : null}
    background-color: ${theme.color.white};
  `;

  const MenuWrapper = animated(styles);

  return (
    <NavbarTag role="navigation" aria-label="main-navigation">
      <div className="nav-brand">
        <LogoLink />
      </div>
      {isBurger && <Burger toggleMenu={toggleMenu} />}
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
