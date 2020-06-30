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

import '../styles/base.scss';

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

          strong,
          span.anticon.anticon-caret-right.ant-collapse-arrow {
            color: #10ddc2 !important;
          }

          li {
            margin-top: 0.25rem;
          }

          .grid {
            display: grid;
            grid-template-columns:
              [xl-start] 1fr 1.5rem [md-start]
              minmax(0, 1024px)
              [md-end] 1.5rem 1fr [xl-end];
          }

          .grid * {
            grid-column: md;
          }

          .grid-xl {
            grid-column: xl;
          }

          .section {
            padding: 5rem 0;
          }

          .full-height {
            height: calc(100vh - 3.25rem);
          }

          .height-30vh {
            height: 30vh;
          }

          .height-40vh {
            height: 40vh;
          }

          .height-50vh {
            height: 50vh;
          }

          .testimoniesCarousel .ant-carousel .slick-slide {
            text-align: center;
            height: calc(100% + 0.5rem);
            overflow: hidden;
            h3 {
              /* color: $color-primary; */
            }
          }

          .imageCarousel .ant-carousel .slick-slide {
            text-align: center;
            height: 50vh;
            overflow: hidden;
          }

          .padding-less {
            padding: 0 !important;
          }

          @media (max-width: 672px) {
            :root {
              font-size: 90%;
            }
          }
        `}
      />
      <Navbar />
      <main className={''} css={css``}>
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
