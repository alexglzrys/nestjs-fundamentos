import { v4 as uuid } from 'uuid';
import { Car } from '../../cars/interfaces/car.interface';

// data semilla
export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Cherokee',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'Tsuru',
  },
];
