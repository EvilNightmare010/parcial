import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sponsors } from './entities/sponsor.entity';
import { SponsorService } from './sponsors.service';
import { SponsorController } from './sponsors.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Sponsors])],
  providers: [SponsorService],
  controllers: [SponsorController],
  exports: [TypeOrmModule],
})
export class SponsorsModule {}
