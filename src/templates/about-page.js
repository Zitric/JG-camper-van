import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

export const AboutPageTemplate = ({ content, heading, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient grid">
      <div className="columns">
        <div className="column">
          <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
            {heading}
          </h2>
          <PageContent className="content" content={content} />
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      {frontmatter.heroImage && (
        <Hero heading={frontmatter.heading} image={frontmatter.heroImage} />
      )}
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        heading={frontmatter.heading}
        content={html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        heading
      }
    }
  }
`;
