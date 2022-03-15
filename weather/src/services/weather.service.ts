import { OWMResponseData } from './weather.types';

const API_URL = `${process.env.REACT_APP_OPENWEATHERMAP_API_URL}/weather?&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric&q=`;

export const getWeatherLocation = async (location: string) => {
  const response = await fetch(`${API_URL}${encodeURI(location)}`);

  if (!response.ok) {
    throw new Error(response.statusText || 'Unknown error occured.');
  }

  const data = (await response.json()) as OWMResponseData;

  return formatData(data);
};

export const getWeatherLocations = (locations: string[]) => {
  return Promise.all(
    locations.map(async (location) => {
      return await getWeatherLocation(location);
    }),
  );
};

const formatData = (data: OWMResponseData) => ({
  city: data.name,
  feelsLike: data.main.feels_like,
  currentTemp: data.main.temp,
  minTemp: data.main.temp_min,
  maxTemp: data.main.temp_max,
  pressure: data.main.pressure,
  windSpeed: data.wind.speed,
});
