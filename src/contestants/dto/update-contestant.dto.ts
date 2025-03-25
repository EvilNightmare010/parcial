import { PartialType } from '@nestjs/mapped-types';
import { IsUUID, IsString, IsInt, IsEnum, IsOptional } from 'class-validator';
import { CreateContestantDto } from './create-contestant.dto';
import { ContestantStatus } from '../enums/contestant-status.enum';

export class UpdateContestantDto extends PartialType(CreateContestantDto) {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  nickname?: string;

  @IsOptional()
  @IsString()
  origin?: string;

  @IsOptional()
  @IsInt()
  strength?: number;

  @IsOptional()
  @IsInt()
  agility?: number;

  @IsOptional()
  @IsInt()
  wins?: number;

  @IsOptional()
  @IsInt()
  losses?: number;

  @IsOptional()
  @IsEnum(ContestantStatus)
  status?: ContestantStatus;
}