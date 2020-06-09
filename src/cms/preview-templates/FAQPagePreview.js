import React from 'react';
import PropTypes from 'prop-types';
import { FAQPageTemplate } from '../../templates/FAQ';

const FAQPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  return data ? (
    <FAQPageTemplate
      image={getAsset(data.image)}
      title={data.title}
      heading={data.heading}
      description={data.description}
    />
  ) : (
    <div>Loading...</div>
  );
};

FAQPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default FAQPagePreview;
