import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  return data ? (
    <IndexPageTemplate
      image={getAsset(data.image)}
      title={data.title}
      heading={data.heading}
      subheading={data.subheading}
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
