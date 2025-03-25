import { IsUUID, IsString, IsNumber, IsEnum } from 'class-validator';
import { TransactionStatus } from '../enums/transaction-status.enum';



export class CreateTransactionDto {
  @IsUUID()
  id: string; // Unique transaction ID

  @IsUUID()
  buyer_id: string; // Who made the purchase

  @IsUUID()
  seller_id: string; // Who sold the item

  @IsString()
  item: string; // What was bought

  @IsNumber()
  amount: number; // Price paid

  @IsEnum(TransactionStatus)
  status: TransactionStatus; // transaction status
}