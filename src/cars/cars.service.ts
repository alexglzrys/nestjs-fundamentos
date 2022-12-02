import { Injectable, NotFoundException } from '@nestjs/common';

// Los servicios son los encargados de comunicarse por lo general con la base de datos para enviarle o recuperar cierta data
// * Comando: nest g s cars
@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id == id);
    // Si no se encontró el auto, lanzamos una excepción
    // Nest nos tiene cubiertos con muchos filtros de excepción personalizados (capa de excepciones), los cuales podemos lanzar en cualquier punto de nuestra lógica cuando se vea necesario
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }
}
