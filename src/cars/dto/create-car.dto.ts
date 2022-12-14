import { IsString, MinLength } from 'class-validator';

// Los DTO (Data Transfer Object) son simplea clases que me ayudan a modelar la data que viene desde un request
// La información que almacenan solo debe ser de lectura, por que es la data original que se envió durante la petición
// Por modelar se entiende como luce su cuerpo (la información), y su tipo (el tipo de dato de cada información)
export class CreateCarDto {
  @IsString({ message: 'La marca es un dato requerido' })
  readonly brand: string;

  @IsString()
  @MinLength(3)
  readonly model: string;
}
