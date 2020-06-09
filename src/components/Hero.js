import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({
  image,
  heading,
  subheading,
  firstBackgroundPosition,
  secondBackgroundPosition,
}) => {
  return (
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `${
          firstBackgroundPosition ? firstBackgroundPosition : 'center'
        } ${secondBackgroundPosition ? secondBackgroundPosition : ''}`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        {heading && (
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow: '#15b7b9 0.5rem 0px 0px, #15b7b9 -0.5rem 0px 0px',
              backgroundColor: '#15b7b9',
              color: '#f5f5f5',
              padding: '1rem',
            }}
          >
            {heading}
          </h1>
        )}
        {subheading && (
          <h2
            className="has-text-weight-bold is-size-1 is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              boxShadow: '#15b7b9 0.5rem 0px 0px, #15b7b9 -0.5rem 0px 0px',
              backgroundColor: '#15b7b9',
              color: '#f5f5f5',
              padding: '1rem',
              marginTop: '2rem',
            }}
          >
            {subheading}
          </h2>
        )}
      </div>
    </div>
  );
};

Hero.propTypes = {
  image: PropTypes.string,
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
