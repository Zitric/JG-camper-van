import React from 'react';
import PropTypes from 'prop-types';
import { CamperVanPostTemplate } from '../../templates/camper-van-post';

const CamperVanPostPreview = ({ entry, widgetFor, getAsset }) => {
  const tags = entry.getIn(['data', 'tags']);
  return (
    <CamperVanPostTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
    />
  );
};

CamperVanPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
};

export default CamperVanPostPreview;
