/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import facebookIcon from 'react-useanimations/lib/facebook';
import instagramIcon from 'react-useanimations/lib/instagram';
import facepaint from 'facepaint';

import MenuLink from '../shared/MenuLink';
import IconAnchor from '../shared/IconAnchor';

const Footer = () => {
  const theme = useTheme();

  const mediaQuery = facepaint([
    theme.breakPoints.small,
    theme.breakPoints.medium,
  ]);

  const StyledFooter = styled.footer(
    mediaQuery({
      backgroundColor: theme.color.black,
      section: {
        margin: ['2rem auto', '2rem 6rem', '2rem 3rem'],
      },
      ul: {
        display: 'grid',
        whiteSpace: 'noWrap',
        gridTemplateColumns: ['1fr', '2fr 1fr', '1fr 1fr 100px'],
        margin: 0,
      },
      'ul > *': {
        gridColumn: 'auto',
      },
      'li:last-child': {
        gridArea: ['', '5 / 1 / 6 / 3', '1 / 3 / 4 / 4'],
        display: 'flex',
        alignItems: 'flexStart',
        justifyContent: 'spaceEvenly',
        margin: ['1.5rem auto 0', '2rem auto 0', '0 auto auto'],
        a: {
          margin: ['0 2rem', '0 1rem', '0 0.2rem'],
        },
      },
    }),
  );

  return (
    <StyledFooter className="grid">
      <section>
        <ul>
          <li>
            <MenuLink variant="footer" to="/">
              Home
            </MenuLink>
          </li>
          <li>
            <MenuLink variant="footer" to="/about">
              Quienes somos
            </MenuLink>
          </li>
          <li>
            <MenuLink variant="footer" to="/camper-vans">
              Camper vans
            </MenuLink>
          </li>
          <li>
            <MenuLink variant="footer" to="/prices">
              Precios
            </MenuLink>
          </li>
          <li>
            <MenuLink variant="footer" to="/conditions">
              Condiciones
            </MenuLink>
          </li>
          <li>
            <MenuLink variant="footer" to="/faq">
              FAQ
            </MenuLink>
          </li>
          <li>
            <MenuLink variant="footer" to="/contact">
              Contacto
            </MenuLink>
          </li>
          <li>
            <IconAnchor
              title="Facebook"
              href="https://www.facebook.com/jgcamper"
              animation={facebookIcon}
            />
            <IconAnchor
              title="Instagram"
              href="https://www.instagram.com/jgcamper"
              animation={instagramIcon}
            />
          </li>
        </ul>
      </section>
    </StyledFooter>
  );
};

export default Footer;
