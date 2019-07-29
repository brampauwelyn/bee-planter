import { Component } from '@angular/core';
import plantsData from './plants.json';

@Component({
  selector: 'app-root',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})

export class PlantComponent {
  title = 'BeePlanter';
  plants: Array<any> = plantsData;
  filteredPlants: Array<any> = [...plantsData];

  resetFilters(){
    this.filteredPlants = this.plants;
    return this.filteredPlants;
  }

  filterByColor(color: string) {
    this.filteredPlants = this.filteredPlants.filter( plant => {
      return plant.color === color;
    });
  }

  filterByNectar(minValue: number, maxValue: number){
    this.filteredPlants = this.filteredPlants.filter( plant => {
      return plant.nectar >= minValue && plant.nectar <= maxValue;
    });
  }

}
