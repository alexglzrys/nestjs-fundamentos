import { IsString, MinLength } from 'class-validator';

// Comop luce la información enviada en el request al momento de registrar una marca
export class CreateBrandDto {
  @IsString()
  @MinLength(3)
  name: string;
}
