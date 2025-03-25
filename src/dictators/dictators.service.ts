import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDictatorDto } from './dto/create-dictator.dto';
import { UpdateDictatorDto } from './dto/update-dictator.dto';


@Injectable()
export class DictatorService {
  private dictators: CreateDictatorDto[] = [];

  create(createDictatorDto: CreateDictatorDto) {
    const { id, ...rest } = createDictatorDto;
    const newDictator: CreateDictatorDto = {
      id: Date.now().toString(),
      ...rest,
    };
    this.dictators.push(newDictator);
    return newDictator;
  }

  findAll() {
    return this.dictators;
  }

  findOne(id: string) {
    const dictator = this.dictators.find((d) => d.id === id);
    if (!dictator) throw new NotFoundException('Dictator not found');
    return dictator;
  }

  update(id: string, updateDictatorDto: UpdateDictatorDto) {
    const index = this.dictators.findIndex((d) => d.id === id);
    if (index === -1) throw new NotFoundException('Dictator not found');

    this.dictators[index] = { ...this.dictators[index], ...updateDictatorDto };
    return this.dictators[index];
  }

  remove(id: string) {
    const index = this.dictators.findIndex((d) => d.id === id);
    if (index === -1) throw new NotFoundException('Dictator not found');

    this.dictators.splice(index, 1);
  }
}