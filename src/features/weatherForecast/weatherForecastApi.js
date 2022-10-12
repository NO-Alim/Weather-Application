import { apiSlice } from '../api/apiSlice';

export const weatherForecastApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ lat, lng }) =>
        `/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`,
    }),
    getForecast: builder.query({
      query: ({ lat, lng }) =>
        `/forecast?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric}`,
    }),
  }),
});

export const { useGetWeatherQuery, useGetForecastQuery } = weatherForecastApi;
