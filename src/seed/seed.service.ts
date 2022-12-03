import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  // Inyectar los servicios donde se desea sembrar información.
  // Como estos servicios forman parte de otro módulo, es necesario exportar esos servicios e importar su módulo padre, en el módulo del seed
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  // Servicio encargado de sembrar la data en los servicios correspondientes
  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);
    return 'Puplate DB executed succesfully';
  }
}
