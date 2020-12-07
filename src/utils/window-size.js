import React from 'react';

const WindowSize = () => {
  const [[windowWidth, windowHeight], setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width: windowWidth, height: windowHeight };
};

export default WindowSize;
