import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContestantDto } from './dto/create-contestant.dto';
import { UpdateContestantDto } from './dto/update-contestant.dto';

@Injectable()
export class ContestantService {
  private contestants: CreateContestantDto[] = []; // Definir el tipo explícitamente

  create(createContestantDto: CreateContestantDto) {
    const { id, ...rest } = createContestantDto;
    const newContestant: CreateContestantDto = {
      id: Date.now().toString(), // Convertir la fecha a string para asegurar compatibilidad
      ...rest
    };
    this.contestants.push(newContestant);
    return newContestant;
  }

  findAll() {
    return this.contestants;
  }

  findOne(id: string) {
    const contestant = this.contestants.find((c) => c.id === id);
    if (!contestant) throw new NotFoundException('Contestant not found');
    return contestant;
  }

  update(id: string, updateContestantDto: UpdateContestantDto) {
    const index = this.contestants.findIndex((c) => c.id === id);
    if (index === -1) throw new NotFoundException('Contestant not found');

    this.contestants[index] = { ...this.contestants[index], ...updateContestantDto };
    return this.contestants[index];
  }

  remove(id: string) {
    const index = this.contestants.findIndex((c) => c.id === id);
    if (index === -1) throw new NotFoundException('Contestant not found');

    this.contestants.splice(index, 1);
  }
}