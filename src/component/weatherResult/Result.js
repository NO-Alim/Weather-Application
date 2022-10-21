import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { useGetWeatherQuery } from '../../features/weatherForecast/weatherForecastApi';
import useGetLocationName from '../../Hooks/useGetLocationName';
const Result = () => {
  const { lat, lng } = useSelector((state) => state.location);
  const {
    data: weatherData,
    isLoading,
    isError,
  } = useGetWeatherQuery({ lat, lng }) || {};
  const address = useGetLocationName();
  let content;

  if (isLoading) {
    content = (
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="flex items-center gap-5">
            <div className="h-5 bg-slate-900 rounded w-1/2"></div>
            <div className="rounded-full bg-slate-900 h-10 w-10 ml-auto"></div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="h-5 bg-slate-900 rounded w-full"></div>
            <div className="flex gap-5 justify-between">
              <div className="h-5 bg-slate-900 rounded w-full"></div>
              <div className="h-5 bg-slate-900 rounded w-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="h-5 bg-slate-900 rounded w-full"></div>
            <div className="flex gap-5 justify-between">
              <div className="h-5 bg-slate-900 rounded w-full"></div>
              <div className="h-5 bg-slate-900 rounded w-full"></div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="h-5 bg-slate-900 rounded w-full"></div>
          </div>
        </div>
      </div>
    );
  }
  if (!isLoading && isError) {
    content = <h1 className="text-center text-2xl">Something Wrong</h1>;
  }
  if (!isLoading && !isError && weatherData) {
    content = (
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h4>{address}</h4>
            <h4>{moment.unix(weatherData.dt).format('LLLL')}</h4>
            <h2 className="x text-slate-300">
              Sunrise 🌅: {moment.unix(weatherData.sys.sunrise).format('LTS')}
            </h2>
            <h2 className="x text-slate-300">
              Sunset 🌇: {moment.unix(weatherData.sys.sunset).format('LTS')}
            </h2>
            <h2 className="text-2xl font-bold">
              {weatherData?.weather[0].main}
            </h2>
          </div>
          <div className="">
            <img
              className="w-20 h-20"
              src={require(`../../assets/icons/${weatherData.weather[0].icon}.png`)}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div>
            <h1 className="text-3xl font-bold">
              {weatherData.main.temp}
              <span>&#8451;</span>
            </h1>
          </div>
          <div className="">
            <h1 className="text-xl">Details</h1>
            <div className="flex flex-col ">
              <div className="flex justify-between text-slate-300 gap-5">
                <div>Feels Like</div>
                <div>
                  {weatherData.main.feels_like}
                  <span>&#8451;</span>
                </div>
              </div>
              <div className="flex justify-between text-slate-300 gap-5">
                <div>Wind</div>
                <div>{weatherData?.wind.speed}m/s</div>
              </div>
              <div className="flex justify-between text-slate-300 gap-5">
                <div>Humidity</div>
                <div>{weatherData.main.humidity}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default Result;
