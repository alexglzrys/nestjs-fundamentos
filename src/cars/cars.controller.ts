import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
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
  // El decorador Param contiene los parámetros de ruta enviados en la URL
  // Los Pipes en los parámetros, nos permiten transformar la data del request. Por defecto todo parámetro enviado en la ruta, Nest la recupera como string. Si la data no se puede transformar, automáticamente, NEST lanza un error HTTP personalizado
  // UUID tiene varias versiones, si deseamos trabajar con una en espécifico, es necesario ajustar el pipe validator -- new ParseUUIDPipe({version: '3'})
  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.findOneById(id);
  }

  // El decorador Body, contiene todo el cuerpo de la petición
  // ? http;//localhost:3000/cars
  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  // Actualización
  // ? http;//localhost:3000/cars/3
  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  // Eliminar
  // ? http;//localhost:3000/cars/param
  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
