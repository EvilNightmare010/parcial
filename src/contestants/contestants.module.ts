import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contestants } from './entities/contestant.entity';
import { ContestantService } from './contestants.service';
import { ContestantController } from './contestants.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Contestants])],
  providers: [ContestantService],
  controllers: [ContestantController],
})
export class ContestantsModule {}
