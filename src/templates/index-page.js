import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import TestimoniesCarousel from '../components/TestimoniesCarousel';
import ImageCarousel from '../components/ImageCarousel';
import CamperVansRoll from '../components/CamperVanRoll';

// import BlogRoll from '../components/BlogRoll';

import 'antd/dist/antd.css';

export const IndexPageTemplate = ({
  heading,
  subHeading,
  heroImage,
  heroHeading,
  heroSubHeading,
  testimonials,
  carouselImages,
}) => {
  return (
    <>
      <div className="full-height">
        {heroImage && (
          <Hero
            image={heroImage}
            heading={heroHeading}
            subheading={heroSubHeading}
          />
        )}
        <section className="section grid">
          <h1>{heading}</h1>
          <h2>{subHeading}</h2>
          <div className="columns">
            <div className="column"></div>
          </div>
        </section>
      </div>
      <section className="section grid-xl height-50vh imageCarousel padding-less">
        <ImageCarousel images={carouselImages} />
      </section>
      <section className="section grid">
        <CamperVansRoll />
      </section>
      <section className="section grid testimoniesCarousel">
        <TestimoniesCarousel testimonials={testimonials} />
      </section>
    </>
    // <section className="section section--gradient">
    //   <div className="container">
    //     <div className="section">
    //           <div className="content">
    //             <Features gridItems={intro.blurbs} />
    //             <div className="columns">
    //               <div className="column is-12 has-text-centered">
    //                 <Link className="btn" to="/products">
    //                   See all products
    //                 </Link>
    //               </div>
    //             </div>
    //             <div className="column is-12">
    //               <h3 className="has-text-weight-semibold is-size-2">
    //                 Latest stories
    //               </h3>
    //               <BlogRoll />
    //               <div className="column is-12 has-text-centered">
    //                 <Link className="btn" to="/blog">
    //                   Read more
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //   </div>
    // </section>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  heroImage: PropTypes.object,
  heroHeading: PropTypes.string,
  heroSubHeading: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout keywords={['Aquiler', 'Camper-van', 'Sevilla']}>
      <IndexPageTemplate
        title={frontmatter.title}
        heroImage={frontmatter.heroImage}
        heroHeading={frontmatter.heroHeading}
        heroSubHeading={frontmatter.heroSubHeading}
        heading={frontmatter.heading}
        subHeading={frontmatter.subHeading}
        testimonials={frontmatter.testimonials}
        carouselImages={frontmatter.carouselImages}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      heroImage: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        subHeading
        testimonials {
          author
          quote
        }
        carouselImages {
          image {
            childImageSharp {
              fluid(maxWidth: 1024, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
