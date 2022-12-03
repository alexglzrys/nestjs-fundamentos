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
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

// Controlador para el módulo de automóviles
// * Comando: nest g co cars
@Controller('cars')
//@UsePipes(ValidationPipe) // Cualquier DTO declarado en alguno de los métodos de este controlador, será validado
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
  // Los DTO nos ayudan a modelar la data que viene desde un request, con la intensión de verificar que los datos enviados cumplan con los requisitos necesarios para poder llevar a cabo la tarea
  // ? http;//localhost:3000/cars
  // Para Validar la información con los DTO, es necesario instalar algunos paquetes de node - class-validator y class-transformer
  // La validación de un DTO la podemos hacer a nivel de método, clase (controlador), a nivel de aplicación, etc. - @UsePipe(ValidationPipe)
  @Post()
  // @UsePipes(ValidationPipe)
  createCar(@Body() createCarDto: CreateCarDto) {
    // Registrar un nuevo carro con los datos enviados a través del cuerpo de la petición
    return this.carsService.create(createCarDto);
  }

  // Actualización
  // ? http;//localhost:3000/cars/3
  // El cuerpo de la petición para una actualización por lo general es opcional, por ello se utilza un DTO diferente
  @Patch(':id')
  updateCar(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  // Eliminar
  // ? http;//localhost:3000/cars/param
  @Delete(':id')
  deleteCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.delete(id);
  }
}
