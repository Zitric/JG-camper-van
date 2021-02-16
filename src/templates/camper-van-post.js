import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { v4 } from 'uuid';

import Content, { HTMLContent } from '../components/Content';

import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import GalleryCamperVan from '../components/GalleryCamperVan';

export const CamperVanPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  images,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            {/* {images &&
              images.map((image) => {
                return (
                  <PreviewCompatibleImage
                    key={v4()}
                    imageInfo={{ image, alt: '' }}
                  />
                );
              })} */}
            <GalleryCamperVan images={images} />
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

CamperVanPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const CamperVanPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter: post } = markdownRemark;

  console.log('Post', post);

  return (
    <Layout>
      <CamperVanPostTemplate
        content={markdownRemark.html}
        contentComponent={HTMLContent}
        description={post.description}
        helmet={
          <Helmet titleTemplate="%s | Camper vans">
            <title>{`${post.title}`}</title>
            <meta name="description" content={`${post.description}`} />
          </Helmet>
        }
        tags={post.tags}
        title={post.title}
        // images={post.images}
      />
    </Layout>
  );
};

CamperVanPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default CamperVanPost;

export const pageQuery = graphql`
  query CamperVanPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        name
        equipment
      }
    }
  }
`;
