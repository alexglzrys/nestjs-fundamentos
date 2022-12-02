import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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
  // Los Pipes en los parámetros, nos permiten transformar la data del request. Por defecto todo parámetro enviado en la ruta, Nest la recupera como string. Si la data no se puede transformar, automáticamente, NEST lanza un error HTTP personalizado
  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(Number(id));
  }
}
