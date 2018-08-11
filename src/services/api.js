import axios from 'axios';

const API_KEY = 'fee45c7773c29805d0235fa9352c62f8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export async function getWeather(city) {
  try {
    const response = await axios.get(`${ROOT_URL}&q=${city},it`);
    console.log(response);
    
    return {...response.data};
  } catch (error) {
    console.error(error);
    throw error;
  }
}