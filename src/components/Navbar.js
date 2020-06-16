import React from 'react';
import { Link } from 'gatsby';
import NavbarLink from './NavbarLink';

import logo from '../img/logo.svg';

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
            <Link to="/" className="navbar-item" title="Logo">
              <figure className="navbar-item image">
                <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
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
              <NavbarLink to="/blog">Blog</NavbarLink>
              <NavbarLink to="/contact">Contacto</NavbarLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
