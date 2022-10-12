import React from 'react';
import Slider from 'react-slick';
import divisionInBangladesh from '../division';
import SampleNextArrow from '../slick/SampleNextArrow';
import SamplePrevArrow from '../slick/SamplePrevArrow';
import SingleSuggestion from './SingleSuggestion';

const SuggestContainer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 724,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex-1 w-full overflow-hidden h-full hidden lg:block">
      <div className="ml-6 mr-6">
        <Slider {...settings}>
          {divisionInBangladesh.map((item, ind) => {
            return <SingleSuggestion item={item} key={ind} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SuggestContainer;
