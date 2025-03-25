import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';

@Injectable()
export class BattleService {
  private battles: CreateBattleDto[] = []; // Definir el tipo explícitamente

  create(createBattleDto: CreateBattleDto) {
    const { id, ...rest } = createBattleDto;
    const newBattle: CreateBattleDto = {
      id: Date.now().toString(), // Convertir la fecha a string para asegurar compatibilidad
      ...rest
    };
    this.battles.push(newBattle);
    return newBattle;
  }

  findAll() {
    return this.battles;
  }

  findOne(id: string) {
    const battle = this.battles.find((b) => b.id === id);
    if (!battle) throw new NotFoundException('Battle not found');
    return battle;
  }

  update(id: string, updateBattleDto: UpdateBattleDto) {
    const index = this.battles.findIndex((b) => b.id === id);
    if (index === -1) throw new NotFoundException('Battle not found');

    this.battles[index] = { ...this.battles[index], ...updateBattleDto };
    return this.battles[index];
  }

  remove(id: string) {
    const index = this.battles.findIndex((b) => b.id === id);
    if (index === -1) throw new NotFoundException('Battle not found');

    this.battles.splice(index, 1);
  }
}
