import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialInfoComponent } from './social-info/social-info.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { AboutInfoComponent } from './about-info/about-info.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
