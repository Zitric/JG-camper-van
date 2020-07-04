import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Carousel } from 'antd';

import PreviewCompatibleImage from './PreviewCompatibleImage';

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
              <PreviewCompatibleImage
                imageInfo={{
                  image: image,
                  childImageSharp: image.childImageSharp,
                  alt: ``,
                }}
              />
            </figure>
          );
        })}
    </Carousel>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageCarousel;
