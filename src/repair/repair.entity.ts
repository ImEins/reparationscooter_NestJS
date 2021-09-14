import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ScooterEntity } from 'src/scooter/scooter.entity';

@Entity()
export class RepairEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', width: 7 })
  abbr: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'float' })
  price: number;

  @ManyToMany(() => ScooterEntity)
  scooters: Promise<ScooterEntity[]>;
}
