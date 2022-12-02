import { Controller, Get, Param } from '@nestjs/common';

// Controlador para el módulo de automóviles
// * Comando: nest g co cars
@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Honda', 'Jeep'];
  // Ruta para listar todos los autos
  // ? http;//localhost:3000/cars
  @Get()
  getAllCars() {
    return this.cars;
  }

  // Ruta para devolver un solo auto por su id
  // ? http;//localhost:3000/cars/param
  @Get(':id')
  getCarById(@Param('id') id: string) {
    return {
      id: this.cars[id],
    };
  }
}
