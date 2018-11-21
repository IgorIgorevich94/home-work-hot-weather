import { IWeatherModel } from "./weather-model";
import { ISocialInfoModel } from "./social-info-model";

export interface ICityInfoModel {
  "id": number;
  "name": string;
  "img": string;
  "country": string;
  "phone": number;
  "weather": IWeatherModel;
  "socialInfo": ISocialInfoModel;
}
