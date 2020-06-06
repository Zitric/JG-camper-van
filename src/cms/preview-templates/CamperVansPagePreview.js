import React from 'react';
import PropTypes from 'prop-types';

import { CamperVansPageTemplate } from '../../templates/camper-vans-page';

const CamperVansPagePreview = ({ entry, widgetFor }) => (
  <CamperVansPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

CamperVansPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CamperVansPagePreview;
