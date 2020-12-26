/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import MenuLink from '../shared/MenuLink';

const Menu = ({ isOpen, isBurger }) => {
  const burgerMenu = css`
    width: 100%;
    position: fixed;
    position: absolute;
    overflow: hidden;
    top: ${(isOpen) => (isOpen ? '4rem' : '-20rem')};
    left: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
  `;

  const inLineMenu = css``;

  const StyledMenu = styled.div`
    /* transform: ${isOpen ? `translateY(0)` : `translateY(-130%)`};
    transform: ${(props) =>
      props.isOpen ? `translateY(0)` : `translateY(-130%)`}; */
    /* transform: translateY(-130%); */
    /* transition: all 0.3s ease-in-out !important; */

    ${isBurger ? burgerMenu : inLineMenu}
    
    transition: ${(isOpen) =>
      isOpen ? 'all 0.25s ease-out' : 'all 0.6s ease-out'};
    transition-duration: .5s;
    left: 0;
    z-index: 1;
  `;

  return (
    <StyledMenu isOpen={isOpen}>
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
    </StyledMenu>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool,
  isBurger: PropTypes.bool,
};

Menu.defaultProps = {
  isOpen: false,
  isBurger: true,
};

export default Menu;
