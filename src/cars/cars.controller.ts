import { Controller, Get } from '@nestjs/common';

// Controlador para el módulo de automóviles
// * Comando: nest g co cars
@Controller('cars')
export class CarsController {
  // Ruta para listar todos los autos
  // ? http;//localhost:3000/cars
  @Get()
  getAllCars() {
    return ['Toyota', 'Honda', 'Jeep'];
  }
}
