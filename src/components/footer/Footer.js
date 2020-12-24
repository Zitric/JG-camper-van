/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import facebookIcon from 'react-useanimations/lib/facebook';
import instagramIcon from 'react-useanimations/lib/instagram';

import MenuLink from '../shared/MenuLink';
import IconAnchor from '../shared/IconAnchor';

const Footer = () => {
  const theme = useTheme();
  const StyledFooter = styled('footer')`
    background-color: ${theme.color.black};
    padding: 3rem;
    ul {
      display: flex;
      flex-wrap: wrap;
    }
  `;

  return (
    <StyledFooter>
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
              {' '}
              Camper vans
            </MenuLink>
          </li>
          <li>
            <MenuLink variant="footer" to="/prices">
              {' '}
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
