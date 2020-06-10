import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import logo from '../img/logo.svg';

const NavbarLink = styled(Link)`
  font-weight: 500;
  color: #15b7b9;
  :hover {
    color: #10ddc2 !important;
  }
`;

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
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
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
              <NavbarLink className="navbar-item" to="/about">
                Quienes somos
              </NavbarLink>
              <NavbarLink className="navbar-item" to="/camper-vans">
                Camper vans
              </NavbarLink>
              {/* <NavbarLink className="navbar-item" to="/">
                Precios
              </NavbarLink> */}
              <NavbarLink className="navbar-item" to="/blog">
                Blog
              </NavbarLink>
              <NavbarLink className="navbar-item" to="/FAQ">
                FAQ
              </NavbarLink>
              <NavbarLink className="navbar-item" to="/contact">
                Contacto
              </NavbarLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
