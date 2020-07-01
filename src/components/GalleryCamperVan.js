import React from 'react';

import { PhotoSwipe } from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';

export default class GalleryCamperVan extends React.Component {
  state = {
    isOpen: false,
  };

  handleOpen = (isOpen, index) =>
    this.setState({ isOpen, index: typeof index === 'undefined' ? 0 : index });

  render() {
    const { images } = this.props;
    const { isOpen } = this.state;

    return (
      <>
        {images && images.length > 0 && (
          <PhotoSwipe
            isOpen={isOpen}
            items={images}
            onClose={() => this.isOpen(false)}
          />
        )}
      </>
    );
  }
}
