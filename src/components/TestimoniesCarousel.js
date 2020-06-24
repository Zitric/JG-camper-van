import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Carousel } from 'antd';
import styled from '@emotion/styled';

const Testimony = styled('article')`
  width: 99% !important;
  margin: 0.3rem;
`;

const Container = styled('div')`
  border-color: #10ddc2;
`;

const settings = {
  infinite: true,
  speed: 1000,
  autoplaySpeed: 6000,
};

const TestimoniesCarousel = ({ testimonials }) => (
  <Carousel autoplay dots={false} {...settings} draggable={true}>
    {testimonials &&
      testimonials.map((testimonial) => (
        <Testimony key={v4()} className="message">
          <Container className="message-body">
            {testimonial.quote}
            <br />
            <cite> – {testimonial.author}</cite>
          </Container>
        </Testimony>
      ))}
  </Carousel>
);

TestimoniesCarousel.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
};

export default TestimoniesCarousel;
