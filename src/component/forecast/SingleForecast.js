import moment from 'moment';
import React from 'react';

const SingleForecast = ({ data }) => {
  console.log(data);
  return (
    <div className="x bg-slate-700 rounded-md p-2 flex flex-col items-center gap-2 w-full">
      <h4>{moment.unix(data.dt).format('MMM Do YY')}</h4>
      <h4>{moment.unix(data.dt).format('LT')}</h4>
      <div className="flex gap-5 justify-center items-center w-full">
        <img
          src={require(`../../assets/icons/${data.weather[0].icon}.png`)}
          alt=""
          className="w-10 h-10"
        />
        <div>
          <h3>{data.weather[0].main}</h3>
          <h3>
            {(data.main.temp - 273.16).toFixed(2)}
            <span>&#8451;</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleForecast;
