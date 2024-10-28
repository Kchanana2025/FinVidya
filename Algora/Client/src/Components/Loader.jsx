import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
      <ThreeCircles
        visible={true}
        height={100}
        width={100}
        color="#B9FF66"
        ariaLabel="three-circles-loading"
      />
    </div>
  );
}

export default Loader;
