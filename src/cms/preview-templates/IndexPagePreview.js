import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  return data ? (
    <IndexPageTemplate
      title={data.title}
      heroImage={getAsset(data.image)}
      heroHeading={data.heroHeading}
      heroSubHeading={data.heroSubHeading}
      heading={data.heading}
      carouselImages={data.carouselImages}
      testimonials={data.testimonials}
    />
  ) : (
    <div>Loading...</div>
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
