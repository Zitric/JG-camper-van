/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import UseAnimations from 'react-useanimations';

const IconAnchor = ({ title, href, animation, size }) => {
  const theme = useTheme();

  return (
    <a title={title} href={href} target="blank">
      <UseAnimations
        animation={animation}
        size={size}
        wrapperStyle={{}}
        strokeColor={theme.color.white}
      />
    </a>
  );
};

IconAnchor.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.number,
};
IconAnchor.defaultProps = {
  title: null,
  href: null,
  size: 40,
};

export default IconAnchor;
