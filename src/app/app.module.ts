import { BrowserModule } from "@angular/platform-browser";
import { NgModule, InjectionToken } from "@angular/core";

import { AppComponent } from "./app.component";
import { WeatherComponent } from "./weather/weather.component";
import { SocialInfoComponent } from "./social-info/social-info.component";
import { MainInfoComponent } from "./main-info/main-info.component";
import { AboutInfoComponent } from "./main-info/about-info/about-info.component";
import { CityInfoService } from "./bl/concrete/city-info.service";
import { ICityInfoServiceToken } from "./bl/abstract/i-city-info-service";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SocialInfoComponent,
    MainInfoComponent,
    AboutInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: ICityInfoServiceToken,
      useClass: CityInfoService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
