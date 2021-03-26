import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { ForecastModel, WeatherModel } from './models/weather';
import { AppService } from './service/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Open Weather';

  shouldShowSpinner = true;

  weatherData: Array<WeatherModel>;
  selectedWeatherData: WeatherModel;
  forecastModel: ForecastModel;

  unsubscribeAll = new Subject<void>();

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getWeatherData()
      .pipe(
        takeUntil(this.unsubscribeAll),
        finalize(() => {
          this.shouldShowSpinner = false;
        }))
      .subscribe((data: Array<WeatherModel>) => {
        this.weatherData = data as Array<WeatherModel>;
      })
  }

  // Get the selected city weather data
  onKnowMoreDetails(weather: WeatherModel) {
    if (this.selectedWeatherData !== weather) {
      this.selectedWeatherData = weather;

      this.appService.getForecastData(this.selectedWeatherData.name)
        .pipe(takeUntil(this.unsubscribeAll))
        .subscribe((hourlyData: ForecastModel) => {
          // Get the Forecast details of selected city
          this.forecastModel = hourlyData;
        })
    }
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
