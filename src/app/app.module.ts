import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { MatSliderModule } from '@angular/material/slider';
import { PlantComponent } from './components/plant/plant.component';
import { LogoComponent } from './components/logo/logo.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';



@NgModule({
  declarations: [
    PlantComponent, LogoComponent, OnboardingComponent
  ],
  imports: [
    BrowserModule,
    LazyLoadImagesModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [PlantComponent, OnboardingComponent]
})
export class AppModule { }
