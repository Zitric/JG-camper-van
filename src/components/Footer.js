import React from 'react';
import { Link } from 'gatsby';

import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

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
                    <Link className="navbar-item" to="/about">
                      Quienes somos
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/camper-vans">
                      Camper vans
                    </Link>
                  </li>
                  <li>
                    <Link to="/prices" className="navbar-item">
                      Precios
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  {/* <li>
                    <Link className="navbar-item" to="/blog">
                      Blog
                    </Link>
                  </li> */}
                  <li>
                    <Link className="navbar-item" to="/conditions">
                      Condiciones
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/FAQ">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contacto
                    </Link>
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
