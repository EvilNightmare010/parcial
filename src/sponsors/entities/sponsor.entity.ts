import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Contestants } from '../../contestants/entities/contestant.entity';

@Entity()
export class Sponsors {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  company_name: string;

  @Column()
  donated_items: string;

  @ManyToOne(() => Contestants)
  preferred_fighter: Contestants;
}
