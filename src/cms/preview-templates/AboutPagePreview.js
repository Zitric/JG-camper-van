import React from 'react';
import PropTypes from 'prop-types';

import { AboutPageTemplate } from '../../templates/about-page';

const AboutPagePreview = ({ entry, widgetFor, getAsset }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={getAsset(entry.getIn(['data', 'image']))}
    content={widgetFor('body')}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default AboutPagePreview;
