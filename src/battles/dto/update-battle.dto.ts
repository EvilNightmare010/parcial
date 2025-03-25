import { PartialType } from '@nestjs/mapped-types';
import { IsUUID, IsString, IsOptional, IsBoolean } from 'class-validator';
import { CreateBattleDto } from './create-battle.dto';


export class UpdateBattleDto extends PartialType(CreateBattleDto) {
    @IsOptional()
    @IsUUID()
    id?: string;
  
    @IsOptional()
    @IsUUID()
    contestant_1?: string;
  
    @IsOptional()
    @IsUUID()
    contestant_2?: string;
  
    @IsOptional()
    @IsUUID()
    winner_id?: string;
  
    @IsOptional()
    @IsBoolean()
    death_occurred?: boolean;
  
    @IsOptional()
    @IsString()
    injuries?: string;
  
    @IsOptional()
    date?: string;
  }