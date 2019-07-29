import { PlantComponent } from './plant.component';

describe('Plantcomponent', () => {

  it('should instantiate', () => {
    const component: PlantComponent = new PlantComponent();
    expect(component).toBeDefined();
  });

  it('should have a plants property', () => {
    const component: PlantComponent = new PlantComponent();
    expect(component.plants).toBeDefined();
  });

  it('should properly reset filters', () => {
    const component: PlantComponent = new PlantComponent();
    const initialArrayLength = component.plants.length;
    component.filterByColor('red');
    component.resetFilters();
    expect(component.filteredPlants.length).toEqual(initialArrayLength);
  });

});
