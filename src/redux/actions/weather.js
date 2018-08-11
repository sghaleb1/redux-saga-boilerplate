import * as types from './actionTypes';

export const fetchWeather = (city) => ({
  type: types.FETCH_WEATHER,
  city
});
export const requestWeather = () => ({
  type: types.REQUEST_WEATHER,
});
export const receiveWeather = (weather) => ({
  type: types.RECEIVE_WEATHER,
  weather
});
export const receiveWeatherFailed = () => ({
  type: types.RECEIVE_WEATHER_FAILED
});