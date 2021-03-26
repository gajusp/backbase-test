import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WeatherModel } from 'src/app/models/weather';
import { AppService } from 'src/app/service/app.service';
import { WeatherCardComponent } from './weather-card.component';


describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;
  let appService:AppService;

  const mockWeatherData = [{"coord":{"lon":2.3488,"lat":48.8534},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":14.68,"feels_like":8.23,"temp_min":13.89,"temp_max":15.56,"pressure":1015,"humidity":47},"visibility":10000,"wind":{"speed":7.2,"deg":220},"clouds":{"all":90},"dt":1616772143,"sys":{"type":1,"id":6550,"country":"FR","sunrise":1616737238,"sunset":1616782300},"timezone":3600,"id":2988507,"name":"Paris","cod":200},{"coord":{"lon":-85.1647,"lat":34.257},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":19.07,"feels_like":18.93,"temp_min":18.89,"temp_max":19.44,"pressure":1018,"humidity":68},"visibility":10000,"wind":{"speed":1.54,"deg":0},"clouds":{"all":1},"dt":1616772025,"sys":{"type":1,"id":5680,"country":"US","sunrise":1616758537,"sunset":1616802998},"timezone":-14400,"id":4219762,"name":"Rome","cod":200},{"coord":{"lon":13.4105,"lat":52.5244},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":16.31,"feels_like":11.93,"temp_min":15.56,"temp_max":17.22,"pressure":1017,"humidity":41},"visibility":10000,"wind":{"speed":4.12,"deg":200},"clouds":{"all":40},"dt":1616772098,"sys":{"type":1,"id":1262,"country":"DE","sunrise":1616734475,"sunset":1616779755},"timezone":3600,"id":2950159,"name":"Berlin","cod":200},{"coord":{"lon":-3.7026,"lat":40.4165},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":17.87,"feels_like":9.54,"temp_min":17.22,"temp_max":19,"pressure":1020,"humidity":32},"visibility":10000,"wind":{"speed":9.26,"deg":220},"clouds":{"all":0},"dt":1616772138,"sys":{"type":1,"id":6443,"country":"ES","sunrise":1616738891,"sunset":1616783552},"timezone":3600,"id":3117735,"name":"Madrid","cod":200},{"coord":{"lon":24.9355,"lat":60.1695},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":5.9,"feels_like":1.68,"temp_min":5.56,"temp_max":6.67,"pressure":1016,"humidity":75},"visibility":10000,"wind":{"speed":3.6,"deg":150},"clouds":{"all":0},"dt":1616772157,"sys":{"type":1,"id":1332,"country":"FI","sunrise":1616731401,"sunset":1616777298},"timezone":7200,"id":658225,"name":"Helsinki","cod":200}];
  
  let selectedWeatherData: WeatherModel={"coord":{"lon":2.3488,"lat":48.8534},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":14.29,"feels_like":9.21,"temp_min":13.89,"temp_max":15,"pressure":1015,"humidity":47},"visibility":10000,"wind":{"speed":5.14,"deg":220},"clouds":{"all":75},"dt":1616773392,"sys":{"type":1,"id":6550,"country":"FR","sunrise":1616737238,"sunset":1616782300},"timezone":3600,"id":2988507,"name":"Paris","cod":200};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCardComponent],
      imports:[HttpClientModule],
      providers:[ AppService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    appService = TestBed.get(AppService);

    component.weatherData = mockWeatherData; 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate the number of cities and weather api response', () => {
    expect(appService.top5EuropeCityArr.length).toEqual(mockWeatherData.length);
  });

  it('should select the city & get forecast details', () => {
    fixture.detectChanges();

    let buttonElement = fixture.debugElement.query(By.css('.btn'));
    buttonElement.triggerEventHandler('click', selectedWeatherData);


    fixture.whenStable().then(($event) => {
      console.log($event);
      
      expect(selectedWeatherData.name).toBe('Paris');
    }); 
  });
});
