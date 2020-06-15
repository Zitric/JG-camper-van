/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
  font-weight: 500;
  color: #15b7b9;
  &.isActive,
  :hover {
    color: #10ddc2 !important;
  }
`;

const NavbarLink = ({ children, to }) => {
  const className = window.location.pathname === to ? 'isActive' : '';
  return (
    <NavLink to={to} className={`navbar-item ${className}`}>
      {children}
    </NavLink>
  );
};

NavbarLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavbarLink;
