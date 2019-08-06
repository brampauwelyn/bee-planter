import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { PlantComponent } from './components/plant/plant.component';
import { LogoComponent } from './components/logo/logo.component';


@NgModule({
  declarations: [
    PlantComponent, LogoComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [PlantComponent]
})
export class AppModule { }
