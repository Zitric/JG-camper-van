/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Global, css, jsx } from '@emotion/core';
import { ThemeProvider } from '@emotion/react';
// import { withPrefix } from 'gatsby';

import { theme } from '../styles/theme';

import Footer from './Footer';
import Navbar from './Navbar';
import SEO from './SEO';
import JsonLd from './JsonLd';
import FadeIn from '../utils/FadeIn';

import GlobalStyles from '../styles/GlobalStyles.jsx';
import '../styles/base.scss';

const Layout = ({ children, title, description, image, article, keywords }) => (
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
      <meta name="theme-color" content={theme.color.white} />
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
        .testimoniesCarousel .ant-carousel .slick-slide {
          text-align: center;
          height: calc(100% + 0.5rem);
          overflow: hidden;
        }

        .padding-less {
          padding: 0 !important;
        }

        .content h3 {
          color: ${theme.color.primary} !important;
        }

        .price.column {
          padding: '0 10px';
          display: flex;
          flex-direction: column;
          font-weight: 600;
          h3 {
            padding-left: 0px;
            text-align: center;
          }
          ul {
            list-style: none;
            li {
              margin: 0;
              margin-bottom: 20px;
            }
          }
        }

        .content ul {
          li {
            margin-bottom: 15px;
            margin-left: 35px;
          }
        }

        .heading-page {
          display: none;
          box-shadow: ${theme.color.primary} 0.5rem 0px 0px,
            ${theme.color.primary} -0.5rem 0px 0px;
          background-color: ${theme.color.primary};
          color: ${theme.color.white};
          padding: 1rem;

          @media (max-width: 768px) {
            display: block;
            width: fit-content;
            margin: 0 auto;
          }
        }

        @media (max-width: 672px) {
          :root {
            font-size: 90%;
          }
          h1 {
            margin-bottom: 3.5rem !important;
          }
        }
      `}
    />
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <FadeIn>
        <main>{children}</main>
      </FadeIn>
      <Footer />
    </ThemeProvider>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

Layout.defaultProps = {
  titleFromProps: null,
  description: null,
  image: null,
  article: false,
  keywords: null,
};

export default Layout;
