/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import UseAnimations from 'react-useanimations';

import menuIcon from 'react-useanimations/lib/menu2';

import StyledFigure from '../shared/Figure.styled';

const Burger = React.memo(({ toggleMenu }) => {
  const theme = useTheme();

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
});

Burger.propTypes = {
  toggleMenu: PropTypes.func,
};

Burger.defaultProps = {
  toggleMenu: () => null,
};

export default Burger;
