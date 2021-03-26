import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ForecastDetailsComponent } from './components/forecast-details/forecast-details.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherModel, ForecastModel } from './models/weather';
import { AppService } from './service/app.service';



describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let appService:AppService;

  let weatherComp:WeatherCardComponent;
  let weatherCardFixture:ComponentFixture<WeatherCardComponent>;

  let forecastComp:ForecastDetailsComponent;
  let forecastFixture:ComponentFixture<ForecastDetailsComponent>;

  let mockWeatherData = [{"coord":{"lon":2.3488,"lat":48.8534},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":14.21,"feels_like":9.85,"temp_min":13,"temp_max":15,"pressure":1014,"humidity":54},"visibility":10000,"wind":{"speed":4.63,"deg":220},"clouds":{"all":0},"dt":1616778914,"sys":{"type":1,"id":6550,"country":"FR","sunrise":1616737238,"sunset":1616782300},"timezone":3600,"id":2988507,"name":"Paris","cod":200},{"coord":{"lon":-85.1647,"lat":34.257},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":21.33,"feels_like":20.31,"temp_min":21.11,"temp_max":22,"pressure":1019,"humidity":53},"visibility":10000,"wind":{"speed":2.07,"deg":280,"gust":3.3},"clouds":{"all":20},"dt":1616778813,"sys":{"type":1,"id":5680,"country":"US","sunrise":1616758537,"sunset":1616802998},"timezone":-14400,"id":4219762,"name":"Rome","cod":200},{"coord":{"lon":13.4105,"lat":52.5244},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":14.39,"feels_like":11.36,"temp_min":13.89,"temp_max":15,"pressure":1016,"humidity":58},"visibility":10000,"wind":{"speed":3.09,"deg":220},"clouds":{"all":0},"dt":1616778787,"sys":{"type":1,"id":1262,"country":"DE","sunrise":1616734475,"sunset":1616779755},"timezone":3600,"id":2950159,"name":"Berlin","cod":200},{"coord":{"lon":-3.7026,"lat":40.4165},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":17.61,"feels_like":12.8,"temp_min":16.67,"temp_max":19,"pressure":1021,"humidity":42},"visibility":10000,"wind":{"speed":5.14,"deg":290},"clouds":{"all":20},"dt":1616778912,"sys":{"type":1,"id":6443,"country":"ES","sunrise":1616738891,"sunset":1616783552},"timezone":3600,"id":3117735,"name":"Madrid","cod":200},{"coord":{"lon":24.9355,"lat":60.1695},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":1.99,"feels_like":-2.15,"temp_min":0.56,"temp_max":4,"pressure":1016,"humidity":87},"visibility":10000,"wind":{"speed":3.09,"deg":140},"clouds":{"all":0},"dt":1616779048,"sys":{"type":1,"id":1332,"country":"FI","sunrise":1616731401,"sunset":1616777298},"timezone":7200,"id":658225,"name":"Helsinki","cod":200}];
  let  selectedWeatherData =  {"coord":{"lon":-85.1647,"lat":34.257},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":21.33,"feels_like":20.31,"temp_min":21.11,"temp_max":22,"pressure":1019,"humidity":53},"visibility":10000,"wind":{"speed":2.07,"deg":280,"gust":3.3},"clouds":{"all":20},"dt":1616778813,"sys":{"type":1,"id":5680,"country":"US","sunrise":1616758537,"sunset":1616802998},"timezone":-14400,"id":4219762,"name":"Rome","cod":200};
  let forecastModel = {"cod":"200","message":0,"cnt":12,"list":[{"dt":1616781600,"main":{"temp":22.08,"feels_like":20.81,"temp_min":22.08,"temp_max":22.44,"pressure":1019,"sea_level":1019,"grnd_level":996,"humidity":50,"temp_kf":-0.36},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":34},"wind":{"speed":2.35,"deg":260},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2021-03-26 18:00:00"},{"dt":1616792400,"main":{"temp":23.03,"feels_like":21.83,"temp_min":23.03,"temp_max":23.39,"pressure":1017,"sea_level":1017,"grnd_level":995,"humidity":51,"temp_kf":-0.36},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":58},"wind":{"speed":2.75,"deg":262},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2021-03-26 21:00:00"},{"dt":1616803200,"main":{"temp":18.28,"feels_like":18.47,"temp_min":18.04,"temp_max":18.28,"pressure":1019,"sea_level":1019,"grnd_level":996,"humidity":74,"temp_kf":0.24},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":75},"wind":{"speed":1.32,"deg":337},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2021-03-27 00:00:00"},{"dt":1616814000,"main":{"temp":15.77,"feels_like":15.96,"temp_min":15.72,"temp_max":15.77,"pressure":1020,"sea_level":1020,"grnd_level":997,"humidity":80,"temp_kf":0.05},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":31},"wind":{"speed":0.76,"deg":77},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2021-03-27 03:00:00"},{"dt":1616824800,"main":{"temp":14.87,"feels_like":14.95,"temp_min":14.87,"temp_max":14.87,"pressure":1020,"sea_level":1020,"grnd_level":997,"humidity":85,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":18},"wind":{"speed":0.93,"deg":88},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2021-03-27 06:00:00"},{"dt":1616835600,"main":{"temp":14.8,"feels_like":14.84,"temp_min":14.8,"temp_max":14.8,"pressure":1019,"sea_level":1019,"grnd_level":996,"humidity":88,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":45},"wind":{"speed":1.2,"deg":78},"visibility":10000,"pop":0.05,"sys":{"pod":"n"},"dt_txt":"2021-03-27 09:00:00"},{"dt":1616846400,"main":{"temp":16.16,"feels_like":17.12,"temp_min":16.16,"temp_max":16.16,"pressure":1020,"sea_level":1020,"grnd_level":997,"humidity":94,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":50},"wind":{"speed":1.04,"deg":126},"visibility":10000,"pop":0.38,"rain":{"3h":0.85},"sys":{"pod":"d"},"dt_txt":"2021-03-27 12:00:00"},{"dt":1616857200,"main":{"temp":21.17,"feels_like":22.8,"temp_min":21.17,"temp_max":21.17,"pressure":1020,"sea_level":1020,"grnd_level":997,"humidity":89,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":2.48,"deg":190},"visibility":10000,"pop":0.23,"sys":{"pod":"d"},"dt_txt":"2021-03-27 15:00:00"},{"dt":1616868000,"main":{"temp":22.81,"feels_like":23.51,"temp_min":22.81,"temp_max":22.81,"pressure":1019,"sea_level":1019,"grnd_level":997,"humidity":79,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":3.6,"deg":195},"visibility":10000,"pop":0.27,"sys":{"pod":"d"},"dt_txt":"2021-03-27 18:00:00"},{"dt":1616878800,"main":{"temp":24.15,"feels_like":24.19,"temp_min":24.15,"temp_max":24.15,"pressure":1018,"sea_level":1018,"grnd_level":995,"humidity":69,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":4,"deg":211},"visibility":10000,"pop":0.19,"sys":{"pod":"d"},"dt_txt":"2021-03-27 21:00:00"},{"dt":1616889600,"main":{"temp":19.77,"feels_like":21.66,"temp_min":19.77,"temp_max":19.77,"pressure":1017,"sea_level":1017,"grnd_level":995,"humidity":89,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":1.23,"deg":182},"visibility":10000,"pop":0.39,"rain":{"3h":0.13},"sys":{"pod":"n"},"dt_txt":"2021-03-28 00:00:00"},{"dt":1616900400,"main":{"temp":18.33,"feels_like":19.49,"temp_min":18.33,"temp_max":18.33,"pressure":1016,"sea_level":1016,"grnd_level":994,"humidity":95,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":2.04,"deg":160},"visibility":10000,"pop":0.57,"rain":{"3h":1.74},"sys":{"pod":"n"},"dt_txt":"2021-03-28 03:00:00"}],"city":{"id":4219762,"name":"Rome","coord":{"lat":34.257,"lon":-85.1647},"country":"US","population":36303,"timezone":-14400,"sunrise":1616758537,"sunset":1616802998}};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WeatherCardComponent,
        ForecastDetailsComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule
      ],
      providers: [
        AppService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    weatherCardFixture = TestBed.createComponent(WeatherCardComponent);
    weatherComp = weatherCardFixture.componentInstance;
    weatherComp.weatherData = mockWeatherData; 
    
    forecastFixture = TestBed.createComponent(ForecastDetailsComponent);
    forecastComp = forecastFixture.componentInstance;
    forecastComp.weatherData = selectedWeatherData;

    weatherCardFixture.detectChanges();
    forecastFixture.detectChanges();

    appService = TestBed.get(AppService);

    component.weatherData = mockWeatherData; 
    component.selectedWeatherData = selectedWeatherData; 
    component.forecastModel = forecastModel; 
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Open Weather'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Open Weather');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Open Weather!');
  });

  it('should show the spinner', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComp = fixture.componentInstance;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('.spinner-border')) as any;
    expect(element && appComp.shouldShowSpinner).toBeTruthy();

  });

  it('should show the city name', () => {
    component.weatherData = mockWeatherData; 
    component.selectedWeatherData = selectedWeatherData; 
    component.forecastModel = forecastModel; 

    fixture.detectChanges();
    weatherCardFixture.detectChanges();
    forecastFixture.detectChanges();

    const eleRef = weatherCardFixture.debugElement.nativeElement.firstElementChild.children[0];
    const cityName = eleRef.getElementsByClassName('card-title card-header')[0].innerText;
    expect(cityName).toBe(' City : Paris ');
  });

});
