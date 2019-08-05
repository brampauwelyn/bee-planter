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
    nectar: {
      min: 0,
      max: 5
    },
    pollen: {
      min: 0,
      max: 5
    }
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
    if (!this.activeFilters.colors.length) {
      this.resetFilters();
    }
  }

  filterByPollenOrNectar(minValue: number, maxValue: number, type: string) {
    this.activeFilters[type] = {
      min: minValue,
      max: maxValue
    };
    this.filteredPlants = this.filteredPlants.filter( plant => {
      return plant[type] >= minValue && plant[type] <= maxValue;
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
