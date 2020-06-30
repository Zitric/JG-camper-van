import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Collapse } from 'antd';
import { v4 } from 'uuid';

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

export const FAQPageTemplate = ({
  title,
  content,
  contentComponent,
  questions,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient grid">
      <div className="columns">
        <div className="column">
          <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
            {title}
          </h2>
          <PageContent className="content" content={content} />
          <Collapse onChange={callback}>
            {questions.map((question) => (
              <Panel header={question.question} key={v4()}>
                <p>{question.answer}</p>
              </Panel>
            ))}
          </Collapse>
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
  const { title, heroImage, html, questions } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      {heroImage && <Hero image={heroImage} heading={'Preguntas frecuentes'} />}
      <FAQPageTemplate
        contentComponent={HTMLContent}
        title={title}
        content={html}
        questions={questions}
      />
    </Layout>
  );
};

FAQPage.propTypes = {
  data: PropTypes.object,
};

FAQPage.defaultProps = {
  data: null,
};

export default FAQPage;

export const FAQPageQuery = graphql`
  query FAQPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heroHeading
        heading
        heroImage {
          sharp: childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        questions {
          question
          answer
        }
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
