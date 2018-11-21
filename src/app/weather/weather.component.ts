import { Component, Inject } from "@angular/core";
import { IWeatherModel } from "../data/weather-model";
import { ICityInfoService, ICityInfoServiceToken } from "../bl/abstract/i-city-info-service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.less"]
})
export class WeatherComponent {

  private readonly cityInfoService: ICityInfoService;
  public get selectedCityWeather(): IWeatherModel {
    return this.cityInfoService.getSelectedCityWeather();
  }

  constructor(@Inject(ICityInfoServiceToken) cityInfoService: ICityInfoService) {
    this.cityInfoService = cityInfoService;
  }

}
