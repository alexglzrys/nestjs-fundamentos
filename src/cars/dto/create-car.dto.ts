import { IsString } from 'class-validator';

// Los DTO (Data Transfer Object) son simplea clases que me ayudan a modelar la data que viene desde un request
// Por modelar se entiende como luce su cuerpo (la información), y su tipo (el tipo de dato de cada información)
export class CreateCarDto {
  @IsString({ message: 'La marca es un dato requerido' })
  readonly brand: string;

  @IsString()
  readonly model: string;
}
