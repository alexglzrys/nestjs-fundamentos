// Como se desea que la información quede almacenada en base de datos (esquema de tabla para las marcas)
export class Brand {
  id: string;
  name: string;

  createdAt: number;
  updatedAt?: number;
}
