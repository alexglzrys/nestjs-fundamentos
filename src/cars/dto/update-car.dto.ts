import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  // Es posible que durante la actualización el frontend envíe solo un dato a actualizar, una parte de ellos, o todo el objeto (es muy común)
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;
}
