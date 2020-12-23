/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import UseAnimations from 'react-useanimations';
import facebookIcon from 'react-useanimations/lib/facebook';
import instagramIcon from 'react-useanimations/lib/instagram';

import MenuLink from '../shared/MenuLink';
import IconAnchor from './IconAnchor';

const Footer = () => {
  const theme = useTheme();
  const StyledFooter = styled('footer')`
    background-color: ${theme.color.black};
    padding: 3rem;
  `;

  return (
    <React.Fragment>
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

      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
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
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    {/* <li>
                    <NavbarLink  to="/blog">
                      Blog
                    </NavbarLink>
                  </li> */}
                    <li>
                      <MenuLink variant="footer" to="/conditions">
                        Condiciones
                      </MenuLink>
                    </li>
                    <li>
                      <MenuLink variant="footer" to="/FAQ">
                        FAQ
                      </MenuLink>
                    </li>
                    <li>
                      <MenuLink variant="footer" to="/contact">
                        Contacto
                      </MenuLink>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <a
                  title="facebook"
                  href="https://www.facebook.com/jgcamper"
                  target="blank"
                >
                  <UseAnimations
                    animation={facebookIcon}
                    size={40}
                    wrapperStyle={{}}
                    strokeColor={'white'}
                  />
                </a>
                <a
                  title="instagram"
                  href="https://www.instagram.com/jgcamper"
                  target="blank"
                >
                  <UseAnimations
                    animation={instagramIcon}
                    size={40}
                    wrapperStyle={{}}
                    strokeColor={'white'}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
