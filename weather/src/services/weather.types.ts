export interface OWMResponseData {
  coord: OWMCoord;
  weather: OWMWeather[];
  base: string;
  main: OWMMain;
  visibility: number;
  wind: OWMWind;
  clouds: OWMClouds;
  dt: number;
  sys: OWMSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface OWMClouds {
  all: number;
}

export interface OWMCoord {
  lon: number;
  lat: number;
}

export interface OWMMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface OWMSys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface OWMWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface OWMWind {
  speed: number;
  deg: number;
}
