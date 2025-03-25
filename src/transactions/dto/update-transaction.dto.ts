import { PartialType } from '@nestjs/mapped-types';
import { IsUUID, IsString, IsEnum, IsOptional } from 'class-validator';
import { CreateTransactionDto } from './create-transaction.dto';
import { TransactionStatus } from '../enums/transaction-status.enum';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
    @IsOptional()
    @IsUUID()
    id?: string;
  
    @IsOptional()
    @IsUUID()
    buyer_id?: string;
  
    @IsOptional()
    @IsUUID()
    seller_id?: string;
  
    @IsOptional()
    @IsString()
    item?: string;
  
    @IsOptional()
    amount?: number;
  
    @IsOptional()
    @IsEnum(TransactionStatus)
    status?: TransactionStatus;
  }