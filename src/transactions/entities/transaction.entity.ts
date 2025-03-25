import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Contestants } from '../../contestants/entities/contestant.entity';

export enum TransactionStatus {
  COMPLETED = 'Completed',
  FAILED = 'Failed',
  DISCOVERED = 'Discovered',
}

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Contestants)
  buyer_id: Contestants;

  @ManyToOne(() => Contestants)
  seller_id: Contestants;

  @Column()
  item: string;

  @Column({ type: 'decimal' })
  amount: number;

  @Column({ type: 'enum', enum: TransactionStatus })
  status: TransactionStatus;
}
