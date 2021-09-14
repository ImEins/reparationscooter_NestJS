import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { RepairEntity } from 'src/repair/repair.entity';

@Entity()
export class ScooterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column()
  power: number;

  @Column({ length: 40 })
  brand: string;

  @Column()
  model: number;

  @Column({ type: 'float' })
  mileage: number;

  @ManyToMany(() => RepairEntity)
  @JoinTable({ name: 'scooters_repairs' })
  repairs: Promise<RepairEntity[]>;
}
