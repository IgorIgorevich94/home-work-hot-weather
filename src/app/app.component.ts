import { Component, Inject } from "@angular/core";
import { ICityInfoServiceToken, ICityInfoService } from "./bl/abstract/i-city-info-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "home-work-hot-weather";

  public readonly cityInfoService: ICityInfoService;

  constructor(@Inject(ICityInfoServiceToken) cityInfoService: ICityInfoService) {
    this.cityInfoService = cityInfoService;
  }
}
