import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

export const PricePageTemplate = ({ heading, content, contentComponent }) => {
  // const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient grid">
      <div className="columns">
        <div className="column">
          <h1 className="title is-size-3 has-text-weight-bold is-bold-light heading-page">
            {heading}
          </h1>
          {/* <PageContent className="content" content={content} /> */}
          <div className="columns is-4 content">
            <div className="price column">
              <h3>Mes de Junio</h3>
              <ul>
                <li>
                  <span>Mínimo 3 días</span>
                </li>
                <li>
                  <span>80 € por día</span>
                </li>
                <li>
                  <span>Límite diario 100 km</span>
                </li>
                <li>
                  <span>Fianza 900 €</span>
                </li>
              </ul>
            </div>
            <div className="price column">
              <h3>De Julio al 15 de Septiembre</h3>
              <ul>
                <li>
                  <span>Mínimo 3 días</span>
                </li>
                <li>
                  <span>100 € por día</span>
                </li>
                <li>
                  <span>Límite diario 100 km</span>
                </li>
                <li>
                  <span>Fianza 900 €</span>
                </li>
              </ul>
            </div>
            <div className="price column">
              <h3>Larga estancia</h3>
              <ul>
                <li>
                  <span>Mínimo 2 semanas</span>
                </li>
                <li>
                  <span>80 € por día</span>
                </li>
                <li>
                  <span>Límite diario 100 km</span>
                </li>
                <li>
                  <span>Fianza 900 €</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PricePageTemplate.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const PricePage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      {frontmatter.heroImage && (
        <Hero heading={frontmatter.heading} image={frontmatter.heroImage} />
      )}
      <PricePageTemplate
        contentComponent={HTMLContent}
        heading={frontmatter.heading}
        content={html}
      />
    </Layout>
  );
};

PricePage.propTypes = {
  data: PropTypes.object,
};

export default PricePage;

export const pricePageQuery = graphql`
  query PricePage($id: String!) {
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
