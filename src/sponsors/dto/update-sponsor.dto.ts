import { PartialType } from '@nestjs/mapped-types';
import { IsUUID, IsString, IsOptional } from 'class-validator';
import { CreateSponsorDto } from './create-sponsor.dto';


export class UpdateSponsorDto extends PartialType(CreateSponsorDto) {
    @IsOptional()
    @IsUUID()
    id?: string;
  
    @IsOptional()
    @IsString()
    company_name?: string;
  
    @IsOptional()
    @IsString()
    donated_items?: string;
  
    @IsOptional()
    @IsUUID()
    preferred_fighter?: string;
  }