/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Carousel } from 'antd';
import styled from '@emotion/styled';

const TestimoniesCarousel = ({ testimonials }) => {
  const theme = useTheme();

  const settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 6000,
  };

  const Wrapper = styled.section``;

  const Testimony = styled('article')`
    width: 99% !important;
    margin: 0.3rem;
  `;

  const Container = styled('div')`
    border-color: ${theme.color.primary};
  `;
  return (
    <Wrapper className="section grid testimoniesCarousel content">
      <h3 className="margin-bottom-3rem"> Opiniones de clientes </h3>
      <Carousel autoplay dots={false} draggable={true} {...settings}>
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
    </Wrapper>
  );
};

TestimoniesCarousel.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
};

export default TestimoniesCarousel;
