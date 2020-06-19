import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import Hero from '../components/Hero';

export const IndexPageTemplate = ({
  heading,
  mainpitch,
  description,
  intro,
  heroImage,
  heroHeading,
  heroSubHeading,
}) => (
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
        <div className="columns">
          <div className="column">
            <div className="content">
              <div className="tile">
                <h1 className="title">{mainpitch.title}</h1>
              </div>
              <div className="tile">
                <h3 className="subtitle">{mainpitch.description}</h3>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
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
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        heroImage={frontmatter.heroImage}
        heroHeading={frontmatter.heroHeading}
        heroSubHeading={frontmatter.heroSubHeading}
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
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heroHeading
        heroSubHeading
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            text
          }
          heading
          description
        }
      }
    }
  }
`;
