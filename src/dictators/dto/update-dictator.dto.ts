import { PartialType } from '@nestjs/mapped-types';
import { IsUUID, IsString, IsInt, IsOptional } from 'class-validator';
import { CreateDictatorDto } from './create-dictator.dto';


export class UpdateDictatorDto extends PartialType(CreateDictatorDto) {
    @IsOptional()
    @IsUUID()
    id?: string;
  
    @IsOptional()
    @IsString()
    name?: string;
  
    @IsOptional()
    @IsString()
    territory?: string;
  
    @IsOptional()
    @IsInt()
    number_of_slaves?: number;
  
    @IsOptional()
    @IsInt()
    loyalty_to_Carolina?: number;
  }