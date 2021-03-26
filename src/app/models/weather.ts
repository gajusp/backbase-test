interface IClouds {
  all: number;
}

interface ICoord {
  lat: number;
  lon: number;
}

interface IMain {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;

  grnd_level?: number;
  sea_level?: number;
  temp_kf?: number;
}

interface ISys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface IWind {
  deg: number;
  speed: number;
}

interface ICity {
  coord: ICoord;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

interface IForecastSys {
  pod: string;
}

interface IList {
  clouds: IClouds;
  dt: number;
  dt_txt: string;
  main: IMain;
  pop: number;
  sys: IForecastSys;
  visibility: number;
  weather: Array<IWeather>;
  wind: IWind;
}

export class WeatherModel {
  base: string;
  clouds: IClouds;
  cod: number;
  coord: ICoord;
  dt: number;
  id: number;
  main: IMain;
  name: string;
  sys: ISys;
  timezone: number;
  visibility: number;
  weather: Array<IWeather>;
  wind: IWind;

}

export class ForecastModel {
  city: ICity;
  cnt: number;
  cod: string;
  list: Array<IList>;
  message: number;
}