import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dictators } from './entities/dictator.entity';
import { DictatorService } from './dictators.service';
import { DictatorController } from './dictators.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Dictators])],
  providers: [DictatorService],
  controllers: [DictatorController],
  exports: [TypeOrmModule],
})
export class DictatorsModule {}
