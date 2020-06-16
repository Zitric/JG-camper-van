import React from 'react';
import PropTypes from 'prop-types';

import { PricePageTemplate } from '../../templates/price-page';

const PricePagePreview = ({ entry, widgetFor, getAsset }) => (
  <PricePageTemplate
    title={entry.getIn(['data', 'title'])}
    image={getAsset(entry.getIn(['data', 'image']))}
    content={widgetFor('body')}
  />
);

PricePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default PricePagePreview;
