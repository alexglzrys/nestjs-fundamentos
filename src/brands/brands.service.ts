import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  // Listado de marcas
  private _brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().getTime(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    // Obtnego la propiedad name de la petición
    const { name } = createBrandDto;
    // Genero la estructura de una nueva marca
    const newBrand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    };
    // Agregar al listado de marcas
    this._brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this._brands;
  }

  findOne(id: string) {
    // Localizar la marca por su id
    const brand = this._brands.find((brand) => brand.id === id);
    // En caso de no existir, lanzamos una excepción de Nest tipo NotFound 400
    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brand = this.findOne(id);
    this._brands = this._brands.map((currentBrand) => {
      if (currentBrand.id === id) {
        brand = {
          ...brand,
          ...updateBrandDto,
          updatedAt: new Date().getTime(),
          id,
        };
        return brand;
      }
      return currentBrand;
    });
    return brand;
  }

  remove(id: string) {
    this._brands = this._brands.filter((brand) => brand.id !== id);
  }

  // Método que permite sembrar data semilla para las marcas
  fillBrandsWithSeedData(brands: Brand[]) {
    this._brands = brands;
  }
}
