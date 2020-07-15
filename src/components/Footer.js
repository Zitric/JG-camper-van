import React from 'react';

import NavbarLink from './NavbarLink';

import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: '100vw' }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <NavbarLink className="navbar-item" to="/about">
                      Quienes somos
                    </NavbarLink>
                  </li>
                  <li>
                    <NavbarLink className="navbar-item" to="/camper-vans">
                      Camper vans
                    </NavbarLink>
                  </li>
                  <li>
                    <NavbarLink to="/prices" className="navbar-item">
                      Precios
                    </NavbarLink>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  {/* <li>
                    <NavbarLink className="navbar-item" to="/blog">
                      Blog
                    </NavbarLink>
                  </li> */}
                  <li>
                    <NavbarLink className="navbar-item" to="/conditions">
                      Condiciones
                    </NavbarLink>
                  </li>
                  <li>
                    <NavbarLink className="navbar-item" to="/FAQ">
                      FAQ
                    </NavbarLink>
                  </li>
                  <li>
                    <NavbarLink className="navbar-item" to="/contact">
                      Contacto
                    </NavbarLink>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4 social">
              <a
                title="facebook"
                href="https://www.facebook.com/jgcamper"
                target="blank"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a
                title="instagram"
                href="https://www.instagram.com/jgcamper"
                target="blank"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
