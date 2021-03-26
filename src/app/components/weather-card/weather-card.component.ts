import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeatherModel } from 'src/app/models/weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() weatherData: Array<WeatherModel>;
  @Output() knowMoreEvent = new EventEmitter<WeatherModel>();

  knowMoreDetails(weather: WeatherModel) {
    this.knowMoreEvent.emit(weather);
  }


}
