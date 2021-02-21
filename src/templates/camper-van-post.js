/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { v4 } from 'uuid';

import Gallery from 'react-photo-gallery';

import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import Layout from '../components/Layout';

export const CamperVanPostTemplate = ({
  // content,
  // contentComponent,
  description,
  equipment,
  title,
  avatar,
  galleryImages,
}) => {
  // const PostContent = contentComponent || Content;
  const theme = useTheme();

  const photos = [];

  if (galleryImages)
    galleryImages.forEach((gallery) => {
      gallery.forEach((image) => {
        photos.push({
          src: image,
          width: 4032,
          height: 3024,
        });
      });
    });

  const Header = styled('header')`
    padding-top: 4.7rem;
  `;

  const Heading = styled('h1')`
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
    padding: 1rem 1.5rem;
    word-break: break-word;
  `;

  const CamperInfo = styled('div')`
    display: flex;
  `;

  const Content = styled('div')`
    padding: 1rem;
  `;

  return (
    <>
      <section className="section grid">
        <Header>
          <Heading className="title is-size-2 has-text-weight-bold is-bold-light">
            {`${title} camper-van`}
          </Heading>
        </Header>
        <CamperInfo>
          <PreviewCompatibleImage
            styles={{ width: '50%', margin: '1rem' }}
            imageInfo={{
              image: avatar[0],
              alt: `Camper-van-avatar`,
            }}
          />
          <Content className="content">
            <p>{description}</p>
          </Content>
        </CamperInfo>
        <p>{equipment}</p>
      </section>
      <section className="next-section grid-xl" style={{ padding: '0 2rem' }}>
        {photos && <Gallery photos={photos} key={v4()} direction={'column'} />}
      </section>
    </>
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
        avatar={post.avatar}
        images={post.images}
        galleryImages={post.galleryImages}
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
        avatar
        galleryImages
      }
    }
  }
`;
