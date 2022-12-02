import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

// Controlador para el módulo de automóviles
// * Comando: nest g co cars
@Controller('cars')
export class CarsController {
  // Inyectar el servicio encargado gestionar los autos
  constructor(private readonly carsService: CarsService) {}

  // Ruta para listar todos los autos
  // ? http;//localhost:3000/cars
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  // Ruta para devolver un solo auto por su id
  // ? http;//localhost:3000/cars/param
  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.carsService.findOneById(Number(id));
  }
}
