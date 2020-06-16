import React from 'react';
import PropTypes from 'prop-types';

import { ConditionPageTemplate } from '../../templates/condition-page';

const ConditionPagePreview = ({ entry, widgetFor, getAsset }) => (
  <ConditionPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={getAsset(entry.getIn(['data', 'image']))}
    content={widgetFor('body')}
  />
);

ConditionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default ConditionPagePreview;
