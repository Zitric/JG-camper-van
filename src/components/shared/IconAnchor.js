/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import UseAnimations from 'react-useanimations';

const IconAnchor = ({ title, href, animation, size }) => {
  const theme = useTheme();
  const [color, setColor] = useState(theme.color.white);

  return (
    <a
      title={title}
      href={href}
      target="blank"
      onMouseEnter={() => setColor(theme.color.primary)}
      onMouseLeave={() => setColor(theme.color.white)}
      css={css`
        svg path {
          stroke: ${color} !important;
        }
      `}
    >
      <UseAnimations animation={animation} size={size} />
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
