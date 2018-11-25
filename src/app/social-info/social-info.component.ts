import { Component, Input } from "@angular/core";
import { ISocialInfoModel } from "../data/social-info-model";

@Component({
  selector: "app-social-info",
  templateUrl: "./social-info.component.html",
  styleUrls: ["./social-info.component.less"]
})
export class SocialInfoComponent {
  public socialInfoModel: ISocialInfoModel;

  @Input()
  public set selectedSocialInfo(value: ISocialInfoModel) {
    this.socialInfoModel = value;
  }
}
