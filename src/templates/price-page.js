import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

export const PricePageTemplate = ({ heading, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient grid">
      <div className="columns">
        <div className="column">
          <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
            {heading}
          </h2>
          <PageContent className="content" content={content} />
          <div className="columns">
            <div className="column">
              <h2>Mes de Junio</h2>
              <span>Furgoneta por día son 80 € (mínimo 3 días)</span>
              <span>El depósito se devuelve tal y como se entrega</span>
              <span>Límite diario 100 km</span>
              <span>Fianza 700 €</span>
            </div>
            <div className="column">
              <h2>Julio, Agosto y hasta el 15 de Septiembre</h2>
              <span>Furgoneta por día son 100 € (mínimo 3 días)</span>
              <span>El depósito se devuelve tal y como se entrega</span>
              <span>Límite diario 100 km</span>
              <span>Fianza 700 €</span>
            </div>
            <div className="column">
              <h2>Oferta de larga estancia</h2>
              <span>Furgoneta por día son 80 € (mínimo 2 semanas)</span>
              <span>El depósito se devuelve tal y como se entrega</span>
              <span>Límite diario 100 km</span>
              <span>Fianza 700 €</span>
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
