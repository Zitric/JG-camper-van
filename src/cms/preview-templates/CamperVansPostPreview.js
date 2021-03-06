import React from 'react';
import PropTypes from 'prop-types';
import { CamperVanPostTemplate } from '../../templates/camper-van-post';

const CamperVanPostPreview = ({ entry, widgetFor, getAsset }) => {
  // const data = entry.getIn(['data']).toJS();

  return (
    <CamperVanPostTemplate
      title={entry.getIn(['data', 'title'])}
      name={entry.getIn(['data', 'name'])}
      avatar={getAsset(entry.getIn(['data', 'avatar']))}
      description={entry.getIn(['data', 'description'])}
      equipment={entry.getIn(['data', 'equipment'])}
      content={widgetFor('body')}
      galleryImages={getAsset(entry.getIn(['data', 'galleryImages']))}
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
