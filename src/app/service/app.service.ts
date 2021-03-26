import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  Open_Weather_API = 'http://api.openweathermap.org/data/2.5/';
  Open_Weather_API_Key = '3ded4162d1e28657f4a16f2ca19a0467';
  Units_Measurement = 'units=metric ';
  Weather_API = 'weather?q=';
  Forecast_API = 'forecast?q=';

  top5EuropeCityArr = ['paris', 'rome', 'berlin', 'madrid', 'helsinki'];

  batchApiCallArr: Array<any>;

  constructor(private http: HttpClient) {
    this.batchApiCallArr = [];

    this.top5EuropeCityArr.forEach(cityName => {
      this.batchApiCallArr.push(
        this.http.get(`${this.Open_Weather_API + this.Weather_API}${cityName}&APPID=${this.Open_Weather_API_Key}&${this.Units_Measurement}`)
      )
    });
  }

  public getWeatherData(): Observable<any> {
    return forkJoin(this.batchApiCallArr)
  }

  public getForecastData(cityName: string): Observable<any> {
    return this.http.get(
      `
      ${this.Open_Weather_API + this.Forecast_API}${cityName}&cnt=12&APPID=${this.Open_Weather_API_Key}&${this.Units_Measurement}
      `
    );
  }

}
