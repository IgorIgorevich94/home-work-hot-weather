import { ICityInfoModel } from "src/app/data/city-info-model";
import { IWeatherModel } from "src/app/data/weather-model";
import { ISocialInfoModel } from "src/app/data/social-info-model";
import { InjectionToken } from "@angular/core";

export let ICityInfoServiceToken = new InjectionToken<ICityInfoService>("cityInfoService");

export interface ICityInfoService {
  selectCity(cityId: number): void;

  getCities(): ICityInfoModel[];

  getCityWeather(cityId: number): IWeatherModel;

  getCitySocialInfo(cityId: number): ISocialInfoModel;

  getSelectedCity(): ICityInfoModel;

  getSelectedCityWeather(): IWeatherModel;

  getSelectedCitySocialInfo(): ISocialInfoModel;
}
