/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import styled from '@emotion/styled';

import MenuLink from '../shared/MenuLink';

const Menu = ({ isOpen, isBurger }) => {
  const [isOpenHere, setIsOpenHere] = React.useState(isOpen);
  const props = useSpring({
    transform: isOpenHere ? 'translateY(0%)' : 'translateY(-130%)',
  });

  React.useEffect(() => {
    setIsOpenHere(isOpen);
  }, [isOpen]);

  console.log('is open', isOpen, 'transform', props);

  // transition: ${dinamicStyle.transition};
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
