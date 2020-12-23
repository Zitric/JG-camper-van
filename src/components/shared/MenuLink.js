/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { Link } from 'gatsby';

const MenuLink = ({ to, variant, children }) => {
  const theme = useTheme();

  const base = css`
    font-size: ${theme.font.size.s};
    font-weight: 500;
    padding: 16px;
  `;

  const footer = css`
    color: ${theme.color.white} !important;
    border: 1px solid ${theme.color.black};
    border-radius: 5px;
    padding: 0.5em 0.75em;
    &.isActive,
    &.isFocus,
    :hover {
      color: ${theme.color.primary} !important;
    }
    :hover {
      border: 1px solid ${theme.color.primary};
    }
  `;

  const navbar = css`
    background-color: ${theme.color.white};
    color: ${theme.color.primary};
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
