/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-size: contain;
  background-attachment: fixed;
  background-position: top;
`;

const TextBox = styled('div')`
  height: 150px;
  justify-content: 'space-around';
  display: flex;
  align-items: 'left';
  flex-direction: column;
  margin: auto auto auto 0;

  h1,
  h2 {
    box-shadow: #15b7b9 0.5rem 0px 0px, #15b7b9 -0.5rem 0px 0px;
    background-color: #15b7b9;
    color: #f5f5f5;
    padding: 1rem;
  }
  h2 {
    margin-top: 1.5rem;
    padding: 0.5rem;
  }
`;

const Hero = ({ image, heading, subheading }) => {
  return (
    <header className="hero grid-xl">
      <ImageBackground
        className="hero-body grid height-40vh"
        Tag="section"
        fluid={image.sharp.fluid}
        fadeIn="soft"
      >
        <TextBox className="grid">
          {heading && (
            <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen title">
              {heading}
            </h1>
          )}
          {subheading && (
            <h2 className="has-text-weight-bold is-size-1 is-size-5-mobile is-size-5-tablet is-size-4-widescreen subtitle">
              {subheading}
            </h2>
          )}
        </TextBox>
      </ImageBackground>
    </header>
  );
};

Hero.propTypes = {
  image: PropTypes.object,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  firstBackgroundPosition: PropTypes.string,
  secondBackgroundPosition: PropTypes.string,
};

Hero.defaultProp = {
  image: null,
  heading: null,
  subheading: null,
  firstBackgroundPosition: null,
  secondBackgroundPosition: null,
};

export default Hero;
