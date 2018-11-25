import { Component, Input } from "@angular/core";
import { IWeatherModel } from "../data/weather-model";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.less"]
})
export class WeatherComponent {
  public weatherModel: IWeatherModel;

  @Input()
  public set selectedCityWeather(value: IWeatherModel) {
    this.weatherModel = value;
  }
}
