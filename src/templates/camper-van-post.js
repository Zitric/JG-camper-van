import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { v4 } from 'uuid';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import Content, { HTMLContent } from '../components/Content';

import Layout from '../components/Layout';

export const CamperVanPostTemplate = ({
  content,
  contentComponent,
  description,
  equipment,
  title,
  images,
}) => {
  const PostContent = contentComponent || Content;

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(true);

  const photos = images
    ? images.map((image) => ({ src: image, width: 1, height: 1 }))
    : {};

  const openLightbox = useCallback((event, { photo, index }) => {
    console.log('event', event);
    console.log('photo', photo);
    console.log('index', index);
    setCurrentImage(index);
    setViewerIsOpen(false);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  console.log('images', images);

  return (
    <section className="section">
      <header>
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
          {title}
        </h1>
      </header>
      <p>{description}</p>
      <p>{equipment}</p>
      <PostContent content={content} />
      <Gallery
        photos={photos}
        key={v4()}
        direction={'column'}
        onClick={openLightbox}
      />
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel currentIndex={currentImage} views={photos} />
          </Modal>
        ) : null}
      </ModalGateway> */}
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
        equipment={post.equipment}
        title={post.title}
        images={post.images}
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
        title
        description
        name
        equipment
      }
    }
  }
`;
