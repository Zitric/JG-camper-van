import React from 'react';

// import { PhotoSwipe } from 'react-photoswipe';
// import 'react-photoswipe/lib/photoswipe.css';

export default class GalleryCamperVan extends React.Component {
  state = {
    isOpen: false,
    index: 0,
  };

  handleOpen = (isOpen, index) =>
    this.setState({ isOpen, index: typeof index === 'undefined' ? 0 : index });

  render() {
    const { images } = this.props;
    const { isOpen } = this.state;

    console.log('images from gallery', images);
    if (images && images.length > 0) {
      console.log(
        'images from gallery',
        images.map((image) => {
          return { src: image, w: 200, h: 200, title: 'title' };
        }),
      );
    }

    return (
      <>
        {images && images.length > 0 && (
          <div>Hola</div>
          // <PhotoSwipe
          //   isOpen={isOpen}
          //   items={images}
          //   onClose={() => this.isOpen(false)}
          //   options={{
          //     index: this.state.index,
          //     history: false,
          //   }}
          // />
        )}
      </>
    );
  }
}
