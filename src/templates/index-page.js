import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import TestimoniesCarousel from '../components/TestimoniesCarousel';
import ImageCarousel from '../components/ImageCarousel';
import CamperVansRoll from '../components/CamperVanRoll';

// import BlogRoll from '../components/BlogRoll';

import 'antd/dist/antd.css';

export const IndexPageTemplate = ({
  // heading,
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
          <div className="columns">
            <div className="column">
              {/* <h2 className="primary-color">{heading}</h2> */}
              <PageContent className="content is-size-5" content={content} />
            </div>
          </div>
        </section>
      </div>
      <section className="section grid-xl height-50vh imageCarousel padding-less">
        <ImageCarousel images={carouselImages} />
      </section>
      <section className="section grid content">
        <h3> Nuestras campervans </h3>
        <CamperVansRoll />
      </section>
      <section className="section grid testimoniesCarousel content">
        <h3> Opiniones de clientes </h3>
        <TestimoniesCarousel testimonials={testimonials} />
      </section>
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
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
        heading={frontmatter.heading}
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
        heading
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
