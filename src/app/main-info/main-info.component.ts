import { Component } from '@angular/core';
import { ICityInfoModel } from '../data/city-info-model';
import { data } from '../data/cities-data';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.less']
})
export class MainInfoComponent {
  public readonly cities: ICityInfoModel[];
  public selectedCityId: number;

  constructor() {
    this.cities = data;
    this.selectedCityId = this.cities[0].id;
  }
}
