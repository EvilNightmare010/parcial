import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Contestants } from '../../contestants/entities/contestant.entity';

@Entity()
export class Battles {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Contestants)
  contestant_1: Contestants;

  @ManyToOne(() => Contestants)
  contestant_2: Contestants;

  @ManyToOne(() => Contestants, { nullable: true })
  winner_id: Contestants;

  @Column({ type: 'boolean' })
  death_occurred: boolean;

  @Column()
  injuries: string;

  @Column({ type: 'timestamp' })
  date: Date;
}
