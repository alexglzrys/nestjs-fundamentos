import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Entrada principal de la aplicación
  const app = await NestFactory.create(AppModule);

  // Declarar la validación de DTOS a nivel de aplicación
  // Un DTO solo puede ser validado si especifica en sus respectivos paths, decoradores de validación
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina la data que no figura en el DTO
      forbidNonWhitelisted: true, // cualquier data adicional, incluyela en los mensajes de validación para dar feedback al frontend
    }),
  );

  await app.listen(3000);
}
bootstrap();
