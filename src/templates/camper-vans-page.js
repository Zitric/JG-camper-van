import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CamperVansRoll from '../components/CamperVanRoll';

export const CamperVansPageTemplate = ({
  heading,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <section className="section section--gradient grid">
        <h1 className="title is-size-3 has-text-weight-bold is-bold-light heading-page">
          {heading}
        </h1>
        <CamperVansRoll />
      </section>
      <section className="section section--gradient grid">
        <PageContent className="content" content={content} />
      </section>
    </>
  );
};

CamperVansPageTemplate.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const CamperVansPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      {frontmatter.heroImage && (
        <Hero image={frontmatter.heroImage} heading={frontmatter.heading} />
      )}
      <CamperVansPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        heading={frontmatter.heading}
        content={html}
      />
    </Layout>
  );
};

CamperVansPage.propTypes = {
  data: PropTypes.object,
};

CamperVansPage.defaultProps = {
  data: null,
  heroImage: null,
};

export default CamperVansPage;

export const camperVansPageQuery = graphql`
  query CamperVansPage($id: String!) {
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
