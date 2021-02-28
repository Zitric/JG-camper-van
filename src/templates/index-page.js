import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import TestimoniesCarousel from '../components/TestimoniesCarousel';
import ImageCarousel from '../components/ImageCarousel';
import CamperVanRolls from '../components/CamperVanRoll';

import 'antd/dist/antd.css';

export const IndexPageTemplate = ({
  heroImage,
  heroHeading,
  heroSubHeading,
  testimonials,
  carouselImages,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <div className="full-height">
        {heroImage && (
          <Hero
            image={heroImage}
            heading={heroHeading}
            subheading={heroSubHeading}
            home
          />
        )}
        <section className="section grid">
          <h1 className="title is-size-3 has-text-weight-bold is-bold-light heading-page">
            {heroHeading}
          </h1>
          <h2 className="title is-size-3 has-text-weight-bold is-bold-light heading-page">
            {heroSubHeading}
          </h2>
        </section>
        <section className="next-section grid">
          <PageContent className="content is-size-5" content={content} />
        </section>
      </div>
      <ImageCarousel images={carouselImages} />
      <section className="section grid content">
        <h3 className="margin-bottom-3rem"> Nuestras campervans </h3>
        <CamperVanRolls />
      </section>
      <TestimoniesCarousel testimonials={testimonials} />
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heroImage: PropTypes.object,
  heroHeading: PropTypes.string,
  heroSubHeading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const IndexPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout keywords={['Aquiler', 'Camper-van', 'Sevilla']}>
      <IndexPageTemplate
        title={frontmatter.title}
        heroImage={frontmatter.heroImage}
        heroHeading={frontmatter.heroHeading}
        heroSubHeading={frontmatter.heroSubHeading}
        testimonials={frontmatter.testimonials}
        carouselImages={frontmatter.carouselImages}
        contentComponent={HTMLContent}
        content={html}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      heroImage: PropTypes.object,
      html: PropTypes.string,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        heroImage {
          sharp: childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heroHeading
        heroSubHeading
        carouselImages {
          image {
            childImageSharp {
              fluid(maxWidth: 1024, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`;
