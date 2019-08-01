import { Component } from '@angular/core';
import plantsData from './plants.json';
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})

export class PlantComponent {
  title = 'BeePlanter';
  plants: Array<any> = plantsData;
  colors: Array<string> = this.mapColors();
  activeFilters = {
    colors: [],
  };
  filteredPlants: Array<any> = [...plantsData];

  mapColors() {
    const colorsArr: Array<string> = [];
    this.plants.map( plant => {
      if (!colorsArr.includes(plant.color)) {
        colorsArr.push(plant.color);
      }
    });
    return colorsArr;
  }

  resetFilters() {
    this.filteredPlants = this.plants;
    return this.filteredPlants;
  }

  filterByColor(color: string) {
    if (this.activeFilters.colors.includes(color)) {
      const colorIndex = this.activeFilters.colors.indexOf(color);
      this.activeFilters.colors.splice(colorIndex, 1);
    } else {
      this.activeFilters.colors.push(color);
    }
    this.filteredPlants = this.plants.filter( plant => {
      return this.activeFilters.colors.includes(plant.color);
    });
    if (!this.filteredPlants.length) {
      this.resetFilters();
    }
  }

  filterByNectar(minValue: number, maxValue: number){
    this.filteredPlants = this.filteredPlants.filter( plant => {
      return plant.nectar >= minValue && plant.nectar <= maxValue;
    });
  }

  setBackgroundColor(color: string){
    const boxShadow = '0 1px 4px 0 rgba(0, 0, 0, 0.15), 0 2px 2px 0 rgba(0, 0, 0, 0.15)';
    const colorActive = this.activeFilters.colors.includes(color);
    const styles = {
      'background-color': color,
      'box-shadow': (colorActive) ? boxShadow : ''
    };
    return styles;
  }

}
