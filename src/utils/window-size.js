import React from 'react';

const WindowSize = () => {
  const [[windowWidth, windowHeight], setWindowSize] = React.useState([
    window ? window.innerWidth : 0,
    window ? window.innerHeight : 0,
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
