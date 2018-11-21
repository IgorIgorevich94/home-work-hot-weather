import { Component, Inject } from "@angular/core";
import {
  ICityInfoService,
  ICityInfoServiceToken
} from "../bl/abstract/i-city-info-service";

@Component({
  selector: "app-main-info",
  templateUrl: "./main-info.component.html",
  styleUrls: ["./main-info.component.less"]
})
export class MainInfoComponent {
  public readonly cityInfoService: ICityInfoService;

  constructor(@Inject(ICityInfoServiceToken) cityInfoService: ICityInfoService) {
    this.cityInfoService = cityInfoService;
  }
}
