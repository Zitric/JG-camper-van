import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  console.log('===> entry', entry);
  console.log('===> widgetFor', widgetFor);
  console.log('===> getAsset', getAsset);
  console.log('===> data', data);

  return data ? (
    <IndexPageTemplate
      title={data.title}
      // heroImage={getAsset(data.heroImage)}
      heroImage={getAsset(entry.getIn(['data', 'heroImage']))}
      heroHeading={data.heroHeading}
      heroSubHeading={data.heroSubHeading}
      content={widgetFor('body')}
      carouselImages={data.carouselImages}
      testimonials={data.testimonials}
    />
  ) : (
    <div>Loading...</div>
  );
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
};

export default IndexPagePreview;
