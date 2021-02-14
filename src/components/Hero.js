/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import BackgroundImage from 'gatsby-background-image';

import { theme } from '../styles/theme';

const Hero = ({ image, heading, subheading, home }) => {
  const ImageBackgroundClasses = home ? 'grid height-50vh' : 'grid height-40vh';

  const Header = styled('header')`
    padding-top: 4.7rem;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  const ImageBackground = styled(BackgroundImage)`
    background-size: contain;
    background-attachment: fixed;
    background-position: top;
    padding: 3rem 1.5rem;
  `;

  const TextBox = styled('div')`
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
    margin: auto auto auto 0;

    h1,
    h2 {
      background-color: ${theme.color.primary};
      color: ${theme.color.white};
      padding: 1rem 1.5rem;
      word-break: break-word;
      margin-bottom: 0;
    }
    h2 {
      padding: 0.5rem 1rem;
    }
  `;

  return (
    <Header className="grid-xl is-hidden-mobile">
      <ImageBackground
        className={ImageBackgroundClasses}
        Tag="section"
        fluid={image.sharp.fluid}
        fadeIn="soft"
      >
        <TextBox>
          {heading && (
            <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
              {heading}
            </h1>
          )}
          {subheading && (
            <h2 className="has-text-weight-bold is-size-1 is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              {subheading}
            </h2>
          )}
        </TextBox>
      </ImageBackground>
    </Header>
  );
};

Hero.propTypes = {
  image: PropTypes.object,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  firstBackgroundPosition: PropTypes.string,
  secondBackgroundPosition: PropTypes.string,
  home: PropTypes.bool,
};

Hero.defaultProp = {
  image: null,
  heading: null,
  subheading: null,
  firstBackgroundPosition: null,
  secondBackgroundPosition: null,
  home: false,
};

export default Hero;
