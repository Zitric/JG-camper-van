import React from 'react';
import { Link } from 'gatsby';
import NavbarLink from './NavbarLink';

import logoOne from '../img/logo-1.jpeg';
import logoTwo from '../img/logo-2.jpeg';

class Navbar extends React.Component {
  state = {
    active: false,
    navBarActiveClass: '',
  };

  toggleHamburger = () =>
    this.setState({ active: !this.state.active }, () => {
      this.state.active
        ? this.setState({ navBarActiveClass: 'is-active' })
        : this.setState({ navBarActiveClass: '' });
    });

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className="navbar-item"
              title="Logo"
              style={{ padding: 0 }}
            >
              <figure
                className="navbar-item image"
                style={{ padding: 0, margin: 0, height: '100%' }}
              >
                <img
                  src={logoOne}
                  alt="JG Camper"
                  style={{ width: '78px', minHeight: '100%' }}
                />
                <img
                  src={logoTwo}
                  alt="JG Camper"
                  style={{ width: '177px', minHeight: '100%' }}
                />
              </figure>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
              role="button"
              tabIndex="0"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <NavbarLink to="/about">Quienes somos</NavbarLink>
              <NavbarLink to="/camper-vans">Camper vans</NavbarLink>
              <NavbarLink to="/prices">Precios</NavbarLink>
              <NavbarLink to="/conditions">Condiciones</NavbarLink>
              <NavbarLink to="/FAQ">FAQ</NavbarLink>
              {/* <NavbarLink to="/blog">Blog</NavbarLink> */}
              <NavbarLink to="/contact">Contacto</NavbarLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
