import React from 'react';
import PropTypes from 'prop-types';
import { FAQPageTemplate } from '../../templates/FAQ';

const FAQPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  return data ? (
    <FAQPageTemplate
      image={getAsset(data.image)}
      title={data.title}
      heading={data.heading}
      content={widgetFor('body')}
    />
  ) : (
    <div>Loading...</div>
  );
};

FAQPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default FAQPagePreview;
