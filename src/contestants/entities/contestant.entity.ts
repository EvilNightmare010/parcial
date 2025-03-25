import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Dictators } from '../../dictators/entities/dictator.entity';
import { ContestantStatus } from '../enums/contestant-status.enum';

@Entity()
export class Contestants {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  origin: string;

  @Column({ type: 'int' })
  strength: number;

  @Column({ type: 'int' })
  agility: number;

  @Column({ type: 'int' })
  wins: number;

  @Column({ type: 'int' })
  losses: number;

  @Column({ type: 'enum', enum: ContestantStatus })
  status: ContestantStatus;

  @ManyToOne(() => Dictators, (dictator) => dictator.contestants)
  dictator: Dictators;
}
