import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { PlantComponent } from './components/plant/plant.component';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';
import { Button } from 'protractor';



@NgModule({
  declarations: [
    PlantComponent, LogoComponent, ButtonComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [PlantComponent]
})
export class AppModule { }
