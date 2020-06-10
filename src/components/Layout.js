/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Global, css, jsx } from '@emotion/core';
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
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            background-color: #f5f5f5;
            margin: 0;
            font-size: 18px;
            line-height: 1.4;
            /* Remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }
          strong {
            color: #10ddc2;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Navbar />
      <main
      // css={css`
      //   margin: 2rem auto 4rem;
      //   max-width: 90vw;
      //   width: 550px;
      // `}
      >
        {children}
        <Footer />
      </main>
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
