/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from '@emotion/react';
import UseAnimations from 'react-useanimations';
import menuIcon from 'react-useanimations/lib/menu2';

import StyledFigure from '../shared/Figure.styled';

const Burger = ({ toggleMenu }) => {
  const theme = useTheme();

  const handleClick = () => {
    console.log('its workiiiiing');
    // setOpen(!open);
    toggleMenu();
  };

  return (
    <StyledFigure>
      <UseAnimations
        onClick={toggleMenu}
        animation={menuIcon}
        size={50}
        strokeColor={theme.color.black}
      />
    </StyledFigure>
  );
};

export default Burger;
