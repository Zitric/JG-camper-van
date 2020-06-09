import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

export const FAQPageTemplate = ({
  title,
  content,
  contentComponent,
  image,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <Layout>
      <Hero image={image} heading={'Preguntas frecuentes'} />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

FAQPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.objectOf(),
};

const FAQPage = ({ data }) => {
  const { markdownRemark, image } = data;

  return (
    <Layout>
      <FAQPageTemplate
        contentComponent={HTMLContent}
        title={markdownRemark.frontmatter.title}
        content={markdownRemark.frontmatter.html}
        image={image}
      />
    </Layout>
  );
};

FAQPage.propTypes = {
  data: PropTypes.object,
};

export default FAQPage;

export const FAQPageQuery = graphql`
  query FAQPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    image: file(relativePath: { eq: "FAQ.jpg" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
