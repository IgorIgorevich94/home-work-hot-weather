import { Injectable, OnInit } from "@angular/core";
import { ICityInfoService } from "../abstract/i-city-info-service";
import { ICityInfoModel } from "src/app/data/city-info-model";
import { IWeatherModel } from "src/app/data/weather-model";
import { ISocialInfoModel } from "src/app/data/social-info-model";
import { data } from "src/app/data/cities-data";

@Injectable({
  providedIn: "root"
})
export class CityInfoService implements ICityInfoService, OnInit {
  private selectedCityId: number;
  private readonly cities: ICityInfoModel[];

  constructor() {
    this.cities = data;
  }

  ngOnInit() {
    this.selectedCityId = this.cities[0].id;
  }

  public getSelectedCityWeather(): IWeatherModel {
    return this.getCityWeather(this.selectedCityId);
  }
  public getSelectedCitySocialInfo(): ISocialInfoModel {
    return this.getCitySocialInfo(this.selectedCityId);
  }

  public getSelectedCity(): ICityInfoModel {
    return this.cities.find(x => x.id === this.selectedCityId);
  }

  public getCityWeather(cityId: number): IWeatherModel {
    return this.getCityById(cityId).weather;
  }
  public getCitySocialInfo(cityId: number): ISocialInfoModel {
    return this.getCityById(cityId).socialInfo;
  }
  public getCities(): ICityInfoModel[] {
    return this.cities;
  }
  public selectCity(cityId: number): void {
    this.getCityById(cityId);
    this.selectedCityId = cityId;
  }

  private getCityById(cityId: number): ICityInfoModel {
    const city: ICityInfoModel = this.cities.find(x => x.id === cityId);
    if (city === null) {
      throw new Error(`City with id:${cityId} does not exist!`);
    }
    return city;
  }
}
