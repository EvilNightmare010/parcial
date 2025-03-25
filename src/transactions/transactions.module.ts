import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transactions } from './entities/transaction.entity';
import { TransactionService } from './transactions.service';
import { TransactionController } from './transactions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Transactions])],
  providers: [TransactionService],
  controllers: [TransactionController],
  exports: [TypeOrmModule],
})
export class TransactionsModule {}
