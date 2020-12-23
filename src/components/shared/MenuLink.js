/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { Link } from 'gatsby';

const MenuLink = ({ to, variant, children }) => {
  const theme = useTheme();

  const base = css`
    font-size: ${theme.font.size.s};
    padding: 16px;
    ::selection {
      color: ${theme.color.white};
      background: ${theme.color.primary};
    }
  `;

  const footer = css`
    color: ${theme.color.white};
    position: relative;
    padding: 0 0 16px;
    &:before,
    &:after {
      transition: all 0.3s ease-in-out;
      content: '';
      position: absolute;
      bottom: 14px;
      width: 0px;
      height: 2px;
      margin: 5px 0 0;
      opacity: 0;
      background-color: ${theme.color.primary};
      left: 0;
    }
    &.isActive,
    &.isFocus,
    :hover {
      color: ${theme.color.primary};
    }
    :hover {
      &:before,
      &:after {
        width: 100%;
        opacity: 1;
      }
    }
  `;

  const navbar = css`
    background-color: ${theme.color.white};
    color: ${theme.color.primary};
    font-weight: 500;
    &.isActive,
    &.isFocus,
    :hover {
      color: ${theme.color.alternative};
    }
  `;

  const styles = [base];
  if (variant && variant === 'footer') styles.push(footer);
  if (variant && variant === 'navbar') styles.push(navbar);

  return (
    <Link to={to} activeClassName="isActive" css={styles}>
      {children}
    </Link>
  );
};

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

MenuLink.defaultProps = {
  variant: null,
};

export default MenuLink;
