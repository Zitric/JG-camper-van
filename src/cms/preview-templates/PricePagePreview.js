import React from 'react';
import PropTypes from 'prop-types';

import { PricePageTemplate } from '../../templates/price-page';

const PricePagePreview = ({ entry, widgetFor, getAsset }) => (
  <PricePageTemplate
    title={entry.getIn(['data', 'title'])}
    heroImage={getAsset(entry.getIn(['data', 'heroImage']))}
    heading={entry.getIn(['data', 'heading'])}
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
