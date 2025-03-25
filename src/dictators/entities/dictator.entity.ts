import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Contestants } from '../../contestants/entities/contestant.entity';

@Entity()
export class Dictators {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  territory: string;

  @Column({ type: 'int' })
  number_of_slaves: number;

  @Column({ type: 'int' })
  loyalty_to_Carolina: number;

  @OneToMany(() => Contestants, (contestant) => contestant.dictator)
  contestants: Contestants[];
}
