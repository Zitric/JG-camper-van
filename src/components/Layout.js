import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
// import { withPrefix } from 'gatsby';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SEO from './SEO';
import JsonLd from './JsonLd';

import '../styles/global.scss';

const Layout = ({ children, title, description, image, article, keywords }) => {
  return (
    <>
      <SEO
        title={title}
        description={description}
        image={image}
        article={article}
        keywords={keywords}
      />
      <JsonLd></JsonLd>
      <Helmet>
        <meta name="theme-color" content="#fff" />
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        /> */}
        <body className="has-navbar-fixed-top" />
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  keywords: PropTypes.string,
};

Layout.defaultProps = {
  titleFromProps: null,
  description: null,
  image: null,
  article: false,
  keywords: null,
};

export default Layout;
