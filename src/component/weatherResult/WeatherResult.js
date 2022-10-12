import React, { useEffect, useRef, useState } from 'react';
import GoogleMap from './GoogleMap';
import Result from './Result';

const WeatherResult = () => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setWidth(ref.current.clientWidth);
    function handleResize() {
      setWidth(ref.current.clientWidth);
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="section bg-slate-900 grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-x-5 lg:gap-y-0">
      <div className=" bg-slate-700 col-span-1 rounded-md p-3 flex flex-col justify-center">
        <Result />
      </div>
      <div className=" bg-slate-700 col-span-2 rounded-md p-2">
        <div ref={ref}>
          <GoogleMap width={width} />
        </div>
      </div>
    </div>
  );
};

export default WeatherResult;
//
