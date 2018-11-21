import { Component, Inject } from "@angular/core";
import { ICityInfoServiceToken, ICityInfoService } from "../bl/abstract/i-city-info-service";
import { ISocialInfoModel } from "../data/social-info-model";

@Component({
  selector: "app-social-info",
  templateUrl: "./social-info.component.html",
  styleUrls: ["./social-info.component.less"]
})
export class SocialInfoComponent {
  private readonly cityInfoService: ICityInfoService;
  public get selectedCitySocialInfo(): ISocialInfoModel {
    return this.cityInfoService.getSelectedCitySocialInfo();
  }

  constructor(@Inject(ICityInfoServiceToken) cityInfoService: ICityInfoService) {
    this.cityInfoService = cityInfoService;
  }
}
