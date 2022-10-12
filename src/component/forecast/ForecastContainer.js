import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { useGetForecastQuery } from '../../features/weatherForecast/weatherForecastApi';
import SampleNextArrow from '../../slick/SampleNextArrow';
import SamplePrevArrow from '../../slick/SamplePrevArrow';
import './forecast.css';
import SingleForecast from './SingleForecast';

const ForecastContainer = () => {
  const { lat, lng } = useSelector((state) => state.location);
  const {
    data: foreCastData,
    isLoading,
    isError,
  } = useGetForecastQuery({ lat, lng }) || {};

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 724,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //when forecast is loading
  const fakeDivCount = [1, 2, 3, 4, 5, 6, 7];

  let content;

  if (isLoading) {
    content = fakeDivCount.map((item) => {
      return (
        <div key={item} className="bg-slate-700 rounded-md p-2">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="flex items-center gap-5">
                <div className="h-3 bg-slate-900 rounded w-1/2"></div>
                <div className="rounded-full bg-slate-900 h-10 w-10 ml-auto"></div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="h-3 bg-slate-900 rounded w-full"></div>
                <div className="flex gap-5 justify-between">
                  <div className="h-3 bg-slate-900 rounded w-full"></div>
                  <div className="h-3 bg-slate-900 rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  if (!isLoading && isError) {
    return (
      <h1 className="section text-xl bg-slate-900 border-t border-slate-800 text-center">
        Something Wrong
      </h1>
    );
  }

  if (!isLoading && !isError && foreCastData?.list?.length > 0) {
    content = foreCastData.list.map((item, ind) => {
      return <SingleForecast key={ind} data={item} />;
    });
  }

  return (
    <div className="section bg-slate-900 flex justify-between gap-5 border-t border-slate-800">
      <div className="flex-1 w-full overflow-hidden h-full">
        <div className="ml-6 mr-6">
          <Slider {...settings}>{content}</Slider>
        </div>
      </div>
    </div>
  );
};

export default ForecastContainer;
