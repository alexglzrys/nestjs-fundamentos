import { Injectable } from '@nestjs/common';

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
    return this.cars.find((car) => car.id == id);
  }
}
