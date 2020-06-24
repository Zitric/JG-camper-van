import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Carousel } from 'antd';
import Img from 'gatsby-image';

const settings = {
  infinite: true,
  speed: 1000,
  autoplaySpeed: 6000,
};

const ImageCarousel = ({ images }) => {
  return (
    <Carousel autoplay {...settings} draggable={true}>
      {images &&
        images.map(({ image }) => {
          return (
            <figure key={v4()}>
              <Img
                class="image"
                fluid={image.childImageSharp.fluid}
                alt="Gatsby Docs are awesome"
              />
            </figure>
          );
        })}
    </Carousel>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.object,
};

export default ImageCarousel;
