import React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import Menu from './Menu';
import LogoLink from './LogoLink';
import Burger from './Burger';
import WindowSize from '../../utils/window-size';

// import FadeIn from '../../utils/FadeIn';

const Navbar = () => {
  const theme = useTheme();
  const { width } = WindowSize();
  const [isBurger, setIsBurger] = React.useState(width < 900);
  const [isOpen, setIsOpen] = React.useState(false);

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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavbarTag role="navigation" aria-label="main-navigation">
      <div className="nav-brand">
        <LogoLink />
        {isBurger && <Burger toggleMenu={toggleMenu} setIsOpen={setIsOpen} />}
      </div>
      <Menu isOpen={isOpen} isBurger={isBurger} />
    </NavbarTag>
  );
};

export default Navbar;
