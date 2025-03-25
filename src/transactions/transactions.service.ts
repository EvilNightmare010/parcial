import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  private transactions: CreateTransactionDto[] = [];

  create(createTransactionDto: CreateTransactionDto) {
    const { id, ...rest } = createTransactionDto;
    const newTransaction: CreateTransactionDto = {
      id: Date.now().toString(),
      ...rest,
    };
    this.transactions.push(newTransaction);
    return newTransaction;
  }

  findAll() {
    return this.transactions;
  }

  findOne(id: string) {
    const transaction = this.transactions.find((t) => t.id === id);
    if (!transaction) throw new NotFoundException('Transaction not found');
    return transaction;
  }

  update(id: string, updateTransactionDto: UpdateTransactionDto) {
    const index = this.transactions.findIndex((t) => t.id === id);
    if (index === -1) throw new NotFoundException('Transaction not found');

    this.transactions[index] = { ...this.transactions[index], ...updateTransactionDto };
    return this.transactions[index];
  }

  remove(id: string) {
    const index = this.transactions.findIndex((t) => t.id === id);
    if (index === -1) throw new NotFoundException('Transaction not found');

    this.transactions.splice(index, 1);
  }
}
