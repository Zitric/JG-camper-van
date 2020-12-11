/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Carousel } from 'antd';

import PreviewCompatibleImage from './PreviewCompatibleImage';
import WindowSize from '../utils/window-size';

const ImageCarousel = ({ images }) => {
  const theme = useTheme();
  const { width } = WindowSize();

  const settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 6000,
  };

  const imagesToShow =
    width > theme.mediaNumber.phone ? images.slice(0, 6) : images.slice(6, 12);

  const Wrapper = styled.section`
    padding: 0px;
    text-align: center;
    overflow: hidden;
    grid-column: xl;
  `;

  return (
    <Wrapper>
      <Carousel autoplay draggable={true} {...settings}>
        {images &&
          imagesToShow.map(({ image }) =>
            image ? (
              <figure key={v4()}>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: image,
                    childImageSharp: image.childImageSharp.fluid,
                    alt: ``,
                  }}
                />
              </figure>
            ) : null,
          )}
      </Carousel>
    </Wrapper>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageCarousel;
