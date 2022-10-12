import React from 'react';
import { useGetWeatherQuery } from '../features/weatherForecast/weatherForecastApi';
const SingleSuggestion = ({ item }) => {
  const { name, lat, lng } = item;
  const {
    data: weatherData,
    isLoading,
    isError,
  } = useGetWeatherQuery({ lat, lng }) || {};

  let content;

  if (isLoading) {
    content = (
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="flex gap-5 justify-center">
            <div className="h-5 bg-slate-700 rounded w-20"></div>
            <div className="h-5 bg-slate-700 rounded w-20"></div>
          </div>
        </div>
      </div>
    );
  }
  if (!isLoading && isError) {
    content = <h2 className="text-center">Something wrong</h2>;
  }

  if (!isLoading && !isError && weatherData) {
    content = (
      <div className="flex justify-around">
        <h2>{name}</h2>
        <div className="flex items-center gap-2">
          <h2>
            {weatherData && weatherData?.main?.temp}
            <span>&#8451;</span>
          </h2>
          <img
            className="w-6 h-6 p-1 bg-slate-100 rounded-full"
            src={require(`../assets/icons/${weatherData.weather[0].icon}.png`)}
            alt=""
          />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-slate-800 border-r border-gray-300 py-2">{content}</div>
  );
};

export default SingleSuggestion;
