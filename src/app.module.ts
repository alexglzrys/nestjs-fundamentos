import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

// Módulo principal de la aplicación
@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
