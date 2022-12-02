import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

// Módulo que agrupa todo lo relacionado a los automóviles gestionados por la aplciación
// * Comando: nest g mo cars
@Module({
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
