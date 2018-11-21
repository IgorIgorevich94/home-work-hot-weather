import { Component, OnInit, Input } from "@angular/core";
import { ICityInfoModel } from "src/app/data/city-info-model";

@Component({
  selector: "app-about-info",
  templateUrl: "./about-info.component.html",
  styleUrls: ["./about-info.component.less"]
})
export class AboutInfoComponent {
  public _cityInfo: ICityInfoModel;

  @Input()
  public set cityInfo(city: ICityInfoModel) {
    this._cityInfo = city;
  }
}
