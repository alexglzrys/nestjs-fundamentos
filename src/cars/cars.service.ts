import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
// Librería para generar uuid únicos (estilo id de mongoDB)
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

// Los servicios son los encargados de comunicarse por lo general con la base de datos para enviarle o recuperar cierta data
// * Comando: nest g s cars
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuidv4(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuidv4(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuidv4(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    // Si no se encontró el auto, lanzamos una excepción
    // Nest nos tiene cubiertos con muchos filtros de excepción personalizados (capa de excepciones), los cuales podemos lanzar en cualquier punto de nuestra lógica cuando se vea necesario
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    // Generar un objeto de tipo Car
    const car: Car = {
      id: uuidv4(),
      ...createCarDto,
    };
    // Almacenar el nuevo carro en la lista de carros
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    // Localizar el auto (no se reinventa la rueda, ya existe un método para ello en el servicio)
    let carDB = this.findOneById(id);
    // En este punto, el auto se localizo, por tanto, mapear el arreglo de autos, actualizando el auto localizado con su nueva data
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        // Se respeta la data actual, se actualiza solo la info que se manda en la petición, pero adicionalmente, se sigue respetando el id original
        // Se puede lnzar un BadRequestException si el id del cuerpo de la petición es diferente, pero con esta simple solución se ignora
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });
    return carDB;
  }
}
