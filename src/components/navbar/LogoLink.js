/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'gatsby';

import StyledFigure from '../shared/Figure.styled';
import logoOne from '../../img/logo-camper-van.jpeg';
import logoTwo from '../../img/logo-title-new.png';

const LogoLink = () => {
  return (
    <Link
      to="/"
      title="Logo"
      css={css`
        padding: 0 0 0 1rem;
      `}
    >
      <StyledFigure>
        <img
          src={logoOne}
          alt="JG Camper"
          css={css`
            max-width: 4.875rem;
            min-height: 100%;
            max-height: 4.7rem;
          `}
        />
        <img
          src={logoTwo}
          alt="JG Camper"
          css={css`
            max-height: 4.7rem;
            max-width: 10.6875rem;
            min-height: 100%;
          `}
        />
      </StyledFigure>
    </Link>
  );
};

export default LogoLink;
