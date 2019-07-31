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
  activeFilters = {
    colors: [],
  };
  filteredPlants: Array<any> = [...plantsData];

  resetFilters() {
    this.filteredPlants = this.plants;
    return this.filteredPlants;
  }

  filterByColor(color: string) {
    this.activeFilters.colors.push(color);
    this.filteredPlants = this.filteredPlants.filter( plant => {
      return this.activeFilters.colors.includes(plant.color);
    });
  }

  filterByNectar(minValue: number, maxValue: number){
    this.filteredPlants = this.filteredPlants.filter( plant => {
      return plant.nectar >= minValue && plant.nectar <= maxValue;
    });
  }

  setBackgroundColor(color: string){
    const styles = {
      'background-color': color
    };
    return styles;
  }

}
