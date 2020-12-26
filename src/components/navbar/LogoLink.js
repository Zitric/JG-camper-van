/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'gatsby';

import StyledFigure from '../shared/Figure.styled';
import logoOne from '../../img/logo-camper-van.jpeg';
import logoTwo from '../../img/logo-title-new.png';

const LogoLink = () => {
  return (
    <Link to="/" title="Logo" style={{ padding: 0 }}>
      <StyledFigure>
        <img
          src={logoOne}
          alt="JG Camper"
          css={css`
            max-width: 4.875rem;
            min-height: 100%;
          `}
        />
        <img
          src={logoTwo}
          alt="JG Camper"
          css={css`
            max-width: 10.6875rem;
            min-height: 100%;
          `}
        />
      </StyledFigure>
    </Link>
  );
};

export default LogoLink;
