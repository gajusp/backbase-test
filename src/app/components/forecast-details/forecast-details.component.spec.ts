import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ForecastModel, WeatherModel } from 'src/app/models/weather';
import { AppService } from 'src/app/service/app.service';
import { ForecastDetailsComponent } from './forecast-details.component';

describe('ForecastDetailsComponent', () => {
  let component: ForecastDetailsComponent;
  let fixture: ComponentFixture<ForecastDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastDetailsComponent ],
      imports:[HttpClientModule],
      providers:[ AppService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.forecastModel=new ForecastModel();
    component.weatherData=new WeatherModel();

  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

});
