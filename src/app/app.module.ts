import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PlantComponent } from './components/plant/plant.component';

@NgModule({
  declarations: [
    PlantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PlantComponent]
})
export class AppModule { }
