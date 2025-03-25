import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Battles } from './entities/battle.entity';
import { BattleService } from './battles.service';
import { BattleController } from './battles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Battles])],
  providers: [BattleService],
  controllers: [BattleController],
  exports: [TypeOrmModule], // Exportar para otros módulos si es necesario
})
export class BattlesModule {}
