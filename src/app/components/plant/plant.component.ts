import { Component } from '@angular/core';
import plantsData from './plants.json';
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})

export class PlantComponent {
  plants: Array<any> = plantsData;
  colors: Array<string> = this.mapColors();
  activeFilters = {
    colors: [],
    nectar: 0,
    pollen: 0
  };
  filteredPlants = {
    active: false,
    results: [...plantsData],
  };

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
    this.clearActiveFilters();
    this.filteredPlants = {
      active: false,
      results: this.plants
    };
    return this.filteredPlants;
  }

  clearActiveFilters() {
    return this.activeFilters = {
      colors: [],
      nectar: 0,
      pollen: 0
    };
  }

  filterByColor(color: string) {
    this.filteredPlants.active = true;
    if (this.activeFilters.colors.includes(color)) {
      const colorIndex = this.activeFilters.colors.indexOf(color);
      this.activeFilters.colors.splice(colorIndex, 1);
    } else {
      this.activeFilters.colors.push(color);
    }
    this.filteredPlants.results = this.plants.filter( plant => {
      return this.activeFilters.colors.includes(plant.color);
    });
    if (!this.activeFilters.colors.length) {
      this.resetFilters();
    }
  }

  filterByPollenOrNectar(type: string) {
    this.filteredPlants.results = this.filteredPlants.results.filter( plant => {
      return plant[type] <= this.activeFilters[type];
    });
  }

  setBackgroundColor(color: string){
    const boxShadow = '0 1px 4px 0 rgba(0, 0, 0, 0.15), 0 2px 2px 0 rgba(0, 0, 0, 0.15)';
    const colorActive = this.activeFilters.colors.includes(color);
    const styles = {
      'background-color': color,
      'box-shadow': (colorActive) ? boxShadow : '',
      'border': `1px solid ${color}`
    };
    return styles;
  }

}
