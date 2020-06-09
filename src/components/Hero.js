import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  background-attachment: fixed;
  background-position: center top;
`;

const TextBox = styled('div')`
  display: flex;
  height: 150px;
  justify-content: 'space-around';
  align-items: 'left';
  flex-direction: column;
  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
    box-shadow: '#15b7b9 0.5rem 0px 0px, #15b7b9 -0.5rem 0px 0px';
    background-color: '#15b7b9';
    color: '#f5f5f5';
    padding: '1rem';
  }
`;

const Hero = ({
  image,
  heading,
  subheading,
  // firstBackgroundPosition,
  // secondBackgroundPosition,
}) => {
  return (
    <ImageBackground
      Tag="section"
      fluid={image.sharp.fluid}
      fadeIn="soft"
      className="full-width-image margin-top-0"
      // style={{
      //   backgroundImage: `url(${
      //     image.childImageSharp ? image.childImageSharp.fluid.src : image
      //   })`,
      //   backgroundPosition: `${
      //     firstBackgroundPosition ? firstBackgroundPosition : 'center'
      //   } ${secondBackgroundPosition ? secondBackgroundPosition : ''}`,
      //   backgroundAttachment: `fixed`,
      // }}
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
  );
};

Hero.propTypes = {
  image: PropTypes.objectOf(),
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
