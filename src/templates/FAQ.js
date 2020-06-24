import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Collapse } from 'antd';

import Content, { HTMLContent } from '../components/Content';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const FAQPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <Collapse onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 4" key="4">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 5" key="5">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 6" key="6">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FAQPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const FAQPage = ({ data }) => {
  const { markdownRemark, heroImage } = data;

  return (
    <Layout>
      {heroImage && <Hero image={heroImage} heading={'Preguntas frecuentes'} />}
      <FAQPageTemplate
        contentComponent={HTMLContent}
        title={markdownRemark.frontmatter.title}
        content={markdownRemark.frontmatter.html}
      />
    </Layout>
  );
};

FAQPage.propTypes = {
  data: PropTypes.object,
  heroImage: PropTypes.object,
};

FAQPage.defaultProps = {
  data: null,
  heroImage: null,
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
    heroImage: file(relativePath: { eq: "FAQ.jpg" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
