import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import Hero from '../../components/Hero';

const BlogIndexPage = ({ data }) => {
  const { heroImage } = data;

  return (
    <Layout>
      <Hero heading={'Ultimas historias'} image={heroImage} />
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
};

BlogIndexPage.propTypes = {
  data: PropTypes.object,
  heroImage: PropTypes.object,
};

BlogIndexPage.defaultProps = {
  data: null,
  heroImage: null,
};

export default BlogIndexPage;

export const BlogIndexPageQuery = graphql`
  query BlogIndexPage {
    heroImage: file(relativePath: { eq: "blog.jpg" }) {
      sharp: childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
