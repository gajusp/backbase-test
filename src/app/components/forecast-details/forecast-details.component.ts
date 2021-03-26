import { Component, Input } from '@angular/core';
import { ForecastModel, WeatherModel } from 'src/app/models/weather';

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss']
})
export class ForecastDetailsComponent {
  @Input() forecastModel: ForecastModel;
  @Input() weatherData: WeatherModel;

  todayDate = new Date();
}
