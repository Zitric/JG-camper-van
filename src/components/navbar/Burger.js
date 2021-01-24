/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const Burger = React.memo(({ toggleMenu, isOpen }) => {
  const theme = useTheme();
  const StyledBurger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 2rem;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 1rem;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${theme.color.black};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
      :first-of-type {
        transform: ${(props) => (props.isOpen ? 'rotate(45deg)' : 'rotate(0)')};
      }

      :nth-of-type(2) {
        opacity: ${(props) => (props.isOpen ? '0' : '1')};
        transform: ${(props) =>
          props.isOpen ? 'translateX(20px)' : 'translateX(0)'};
      }

      :nth-of-type(3) {
        transform: ${(props) =>
          props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  `;

  return (
    <StyledBurger onClick={toggleMenu} isOpen={isOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
});

Burger.propTypes = {
  toggleMenu: PropTypes.func,
  isOpen: PropTypes.bool,
};

Burger.defaultProps = {
  toggleMenu: () => null,
};

export default React.memo(Burger);
