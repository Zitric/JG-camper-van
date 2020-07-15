import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

export const ConditionPageTemplate = ({
  heading,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient grid">
      <div className="columns">
        <div className="column">
          <h1 className="title is-size-3 has-text-weight-bold is-bold-light heading-page">
            {heading}
          </h1>
          <PageContent className="content" content={content} />
        </div>
      </div>
    </section>
  );
};

ConditionPageTemplate.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ConditionPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout>
      {frontmatter.heroImage && (
        <Hero heading={frontmatter.heading} image={frontmatter.heroImage} />
      )}
      <ConditionPageTemplate
        contentComponent={HTMLContent}
        heading={frontmatter.heading}
        content={html}
      />
    </Layout>
  );
};

ConditionPage.propTypes = {
  data: PropTypes.object,
};

export default ConditionPage;

export const conditionPageQuery = graphql`
  query ConditionPage($id: String!) {
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
