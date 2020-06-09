import React from 'react';
import PropTypes from 'prop-types';

import { CamperVansPageTemplate } from '../../templates/camper-vans-page';

const CamperVansPagePreview = ({ entry, widgetFor, getAsset }) => (
  <CamperVansPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={getAsset(entry.getIn(['data', 'image']))}
    content={widgetFor('body')}
  />
);

CamperVansPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default CamperVansPagePreview;
