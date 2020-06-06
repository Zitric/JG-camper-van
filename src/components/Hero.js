import React from 'react';

const Hero = ({ image, title, subheading }) => {
  return (
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
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
        {title && (
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow: '#15b7b9 0.5rem 0px 0px, #15b7b9 -0.5rem 0px 0px',
              backgroundColor: '#15b7b9',
              color: '#f5f5f5',
              padding: '1rem',
            }}
          >
            {title}
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

export default Hero;
